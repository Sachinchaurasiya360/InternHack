
i
m
p
o
r
t
 
R
e
a
c
t
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
L
i
n
k
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
A
r
r
o
w
U
p
R
i
g
h
t
,
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
I
n
d
i
a
n
R
u
p
e
e
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
T
r
a
c
k
 
}
 
f
r
o
m
 
"
.
/
t
r
a
c
k
s
"
;


i
m
p
o
r
t
 
{
 
g
e
t
L
e
s
s
o
n
C
o
u
n
t
 
}
 
f
r
o
m
 
"
.
/
l
e
s
s
o
n
-
c
o
u
n
t
s
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
T
r
a
c
k
P
r
o
g
r
e
s
s
 
}
 
f
r
o
m
 
"
.
/
u
s
e
T
r
a
c
k
P
r
o
g
r
e
s
s
"
;




i
n
t
e
r
f
a
c
e
 
T
r
a
c
k
C
a
r
d
P
r
o
p
s
 
{


 
 
t
r
a
c
k
:
 
T
r
a
c
k
;


 
 
i
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
p
r
o
g
r
e
s
s
?
:
 
T
r
a
c
k
P
r
o
g
r
e
s
s
 
|
 
n
u
l
l
;


}




c
o
n
s
t
 
M
A
X
_
S
T
A
G
G
E
R
_
I
N
D
E
X
 
=
 
8
;


c
o
n
s
t
 
S
T
A
G
G
E
R
_
S
T
E
P
 
=
 
0
.
0
4
;


c
o
n
s
t
 
B
A
S
E
_
D
E
L
A
Y
 
=
 
0
.
0
5
;




e
x
p
o
r
t
 
c
o
n
s
t
 
T
r
a
c
k
C
a
r
d
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
T
r
a
c
k
C
a
r
d
(
{
 
t
r
a
c
k
,
 
i
n
d
e
x
,
 
p
r
o
g
r
e
s
s
 
}
:
 
T
r
a
c
k
C
a
r
d
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
d
e
l
a
y
 
=
 
B
A
S
E
_
D
E
L
A
Y
 
+
 
M
a
t
h
.
m
i
n
(
i
n
d
e
x
,
 
M
A
X
_
S
T
A
G
G
E
R
_
I
N
D
E
X
)
 
*
 
S
T
A
G
G
E
R
_
S
T
E
P
;


 
 
c
o
n
s
t
 
l
i
v
e
C
o
u
n
t
 
=
 
g
e
t
L
e
s
s
o
n
C
o
u
n
t
(
t
r
a
c
k
.
l
e
s
s
o
n
C
o
u
n
t
K
e
y
)
;


 
 
c
o
n
s
t
 
s
t
a
t
L
a
b
e
l
 
=
 
l
i
v
e
C
o
u
n
t
 
!
=
 
n
u
l
l
 
?
 
`
$
{
l
i
v
e
C
o
u
n
t
}
 
l
e
s
s
o
n
s
`
 
:
 
t
r
a
c
k
.
s
t
a
t
;


 
 
c
o
n
s
t
 
p
c
t
 
=
 
p
r
o
g
r
e
s
s
 
&
&
 
p
r
o
g
r
e
s
s
.
t
o
t
a
l
 
>
 
0
 
?
 
M
a
t
h
.
r
o
u
n
d
(
(
p
r
o
g
r
e
s
s
.
c
o
m
p
l
e
t
e
d
 
/
 
p
r
o
g
r
e
s
s
.
t
o
t
a
l
)
 
*
 
1
0
0
)
 
:
 
n
u
l
l
;


 
 
c
o
n
s
t
 
i
s
C
o
m
p
l
e
t
e
 
=
 
p
c
t
 
!
=
=
 
n
u
l
l
 
&
&
 
p
c
t
 
>
=
 
1
0
0
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
2
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
,
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
t
o
=
{
t
r
a
c
k
.
t
o
 
?
?
 
`
/
l
e
a
r
n
/
$
{
t
r
a
c
k
.
p
a
t
h
}
`
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
p
-
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
h
-
f
u
l
l
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
t
o
p
-
4
 
r
i
g
h
t
-
4
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
t
r
a
c
k
.
k
i
n
d
}


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
 
m
b
-
3
 
p
r
-
1
6
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
0
 
h
-
1
0
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
a
c
k
.
i
c
o
n
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
5
 
h
-
5
 
$
{
t
r
a
c
k
.
c
o
l
o
r
}
`
}
 
a
r
i
a
-
h
i
d
d
e
n
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
i
n
e
-
c
l
a
m
p
-
1
 
l
e
a
d
i
n
g
-
t
i
g
h
t
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
c
k
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
0
.
5
 
b
l
o
c
k
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
L
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
c
k
.
s
a
l
a
r
y
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
m
t
-
1
 
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
9
0
0
/
3
0
 
p
x
-
1
.
5
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
d
i
a
n
R
u
p
e
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
c
k
.
s
a
l
a
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
p
r
o
g
r
e
s
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
m
p
l
e
t
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
e
m
e
r
a
l
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
f
o
n
t
-
m
o
n
o
"
>
{
p
r
o
g
r
e
s
s
.
c
o
m
p
l
e
t
e
d
}
/
{
p
r
o
g
r
e
s
s
.
t
o
t
a
l
}
 
{
p
r
o
g
r
e
s
s
.
l
a
b
e
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
f
o
n
t
-
m
o
n
o
"
>
{
p
c
t
}
%
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
h
-
1
.
5
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
h
-
f
u
l
l
 
b
g
-
l
i
m
e
-
5
0
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
d
u
r
a
t
i
o
n
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
p
c
t
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
i
n
e
-
c
l
a
m
p
-
2
 
m
b
-
4
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
{
t
r
a
c
k
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
a
u
t
o
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
t
-
3
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
5
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
o
p
e
n
 
t
r
a
c
k


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
t


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}
)
;


