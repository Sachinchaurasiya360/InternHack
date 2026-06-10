
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
,
 
{
 
u
s
e
M
e
m
o
 
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
"
;


i
m
p
o
r
t
 
{
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
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
 
C
h
e
c
k
,
 
G
i
t
P
u
l
l
R
e
q
u
e
s
t
,
 
L
o
a
d
e
r
2
 
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
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
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
 
q
u
e
r
y
K
e
y
s
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
q
u
e
r
y
-
k
e
y
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
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
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
 
t
y
p
e
 
{
 
H
a
c
k
t
o
b
e
r
f
e
s
t
P
r
o
g
r
e
s
s
R
e
s
p
o
n
s
e
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
t
y
p
e
s
"
;




c
o
n
s
t
 
R
I
N
G
_
R
A
D
I
U
S
 
=
 
7
2
;


c
o
n
s
t
 
C
E
N
T
E
R
 
=
 
1
0
0
;


c
o
n
s
t
 
C
I
R
C
 
=
 
2
 
*
 
M
a
t
h
.
P
I
 
*
 
R
I
N
G
_
R
A
D
I
U
S
;




f
u
n
c
t
i
o
n
 
n
o
d
e
P
o
s
i
t
i
o
n
(
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
,
 
t
o
t
a
l
:
 
n
u
m
b
e
r
)
 
{


 
 
c
o
n
s
t
 
a
n
g
l
e
 
=
 
(
i
n
d
e
x
 
/
 
t
o
t
a
l
)
 
*
 
2
 
*
 
M
a
t
h
.
P
I
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
r
e
t
u
r
n
 
{


 
 
 
 
x
:
 
C
E
N
T
E
R
 
+
 
R
I
N
G
_
R
A
D
I
U
S
 
*
 
M
a
t
h
.
c
o
s
(
a
n
g
l
e
)
,


 
 
 
 
y
:
 
C
E
N
T
E
R
 
+
 
R
I
N
G
_
R
A
D
I
U
S
 
*
 
M
a
t
h
.
s
i
n
(
a
n
g
l
e
)
,


 
 
}
;


}




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
 
H
a
c
k
t
o
b
e
r
f
e
s
t
T
r
a
c
k
e
r
 
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
 
H
a
c
k
t
o
b
e
r
f
e
s
t
T
r
a
c
k
e
r
(
)
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
,
 
i
s
L
o
a
d
i
n
g
,
 
i
s
E
r
r
o
r
 
}
 
=
 
u
s
e
Q
u
e
r
y
<
H
a
c
k
t
o
b
e
r
f
e
s
t
P
r
o
g
r
e
s
s
R
e
s
p
o
n
s
e
>
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
o
p
e
n
s
o
u
r
c
e
.
h
a
c
k
t
o
b
e
r
f
e
s
t
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
"
/
o
p
e
n
s
o
u
r
c
e
/
a
n
a
l
y
t
i
c
s
/
h
a
c
k
t
o
b
e
r
f
e
s
t
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
2
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
r
i
n
g
O
f
f
s
e
t
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
d
a
t
a
)
 
r
e
t
u
r
n
 
C
I
R
C
;


 
 
 
 
r
e
t
u
r
n
 
C
I
R
C
 
-
 
(
d
a
t
a
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
 
d
a
t
a
.
g
o
a
l
)
 
*
 
C
I
R
C
;


 
 
}
,
 
[
d
a
t
a
]
)
;




 
 
i
f
 
(
i
s
L
o
a
d
i
n
g
)
 
{


 
 
 
 
r
e
t
u
r
n
 
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
8
 
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
 
b
g
-
w
h
i
t
e
 
p
-
1
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
"
>


 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
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
h
-
6
 
w
-
6
 
a
n
i
m
a
t
e
-
s
p
i
n
 
t
e
x
t
-
o
r
a
n
g
e
-
5
0
0
"
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
i
s
E
r
r
o
r
 
|
|
 
!
d
a
t
a
)
 
{


 
 
 
 
r
e
t
u
r
n
 
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
8
 
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
 
b
g
-
w
h
i
t
e
 
p
-
6
 
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
"
>


 
 
 
 
 
 
 
 
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
5
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
"
>


 
 
 
 
 
 
 
 
 
 
C
o
u
l
d
 
n
o
t
 
l
o
a
d
 
H
a
c
k
t
o
b
e
r
f
e
s
t
 
p
r
o
g
r
e
s
s
.
 
T
r
y
 
a
g
a
i
n
 
l
a
t
e
r
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
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
 
d
a
t
a
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
 
>
=
 
d
a
t
a
.
g
o
a
l
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
8
 
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
o
r
a
n
g
e
-
2
0
0
 
b
g
-
w
h
i
t
e
 
p
-
5
 
s
m
:
p
-
6
 
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
o
r
a
n
g
e
-
5
0
0
/
2
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
9
0
0
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
6
 
l
g
:
f
l
e
x
-
r
o
w
 
l
g
:
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
 
l
g
:
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
 
f
l
e
x
-
c
o
l
 
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
 
s
m
:
f
l
e
x
-
r
o
w
 
s
m
:
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
 
s
m
:
g
a
p
-
8
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
r
e
l
a
t
i
v
e
 
w
-
5
2
 
h
-
5
2
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
2
0
0
 
2
0
0
"
 
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
 
w
-
f
u
l
l
 
-
r
o
t
a
t
e
-
9
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
C
E
N
T
E
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
C
E
N
T
E
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
R
I
N
G
_
R
A
D
I
U
S
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
r
o
k
e
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
s
t
r
o
k
e
-
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
"
6
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
C
E
N
T
E
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
C
E
N
T
E
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
R
I
N
G
_
R
A
D
I
U
S
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
r
o
k
e
-
o
r
a
n
g
e
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
"
6
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
L
i
n
e
c
a
p
=
"
r
o
u
n
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
C
I
R
C
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
r
o
k
e
D
a
s
h
o
f
f
s
e
t
:
 
C
I
R
C
 
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
 
s
t
r
o
k
e
D
a
s
h
o
f
f
s
e
t
:
 
r
i
n
g
O
f
f
s
e
t
 
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
8
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
.
n
o
d
e
s
.
m
a
p
(
(
n
o
d
e
,
 
i
n
d
e
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
{
 
x
,
 
y
 
}
 
=
 
n
o
d
e
P
o
s
i
t
i
o
n
(
i
n
d
e
x
,
 
d
a
t
a
.
n
o
d
e
s
.
l
e
n
g
t
h
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
n
o
d
e
.
i
d
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
a
b
s
o
l
u
t
e
 
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
x
-
1
/
2
 
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
1
/
2
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
:
 
`
$
{
(
x
 
/
 
2
0
0
)
 
*
 
1
0
0
}
%
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
:
 
`
$
{
(
y
 
/
 
2
0
0
)
 
*
 
1
0
0
}
%
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
f
l
e
x
 
h
-
9
 
w
-
9
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
d
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
o
r
a
n
g
e
-
5
0
0
 
b
g
-
o
r
a
n
g
e
-
5
0
0
 
t
e
x
t
-
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
 
b
g
-
w
h
i
t
e
 
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
5
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
n
o
d
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
o
d
e
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
 
?
 
<
C
h
e
c
k
 
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
4
 
w
-
4
"
 
/
>
 
:
 
n
o
d
e
.
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
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
 
t
e
x
t
-
c
e
n
t
e
r
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
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
t
e
x
t
-
3
x
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
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
d
a
t
a
.
g
o
a
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
r
i
b
u
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
t
-
4
 
t
e
x
t
-
c
e
n
t
e
r
 
s
m
:
m
t
-
0
 
s
m
:
t
e
x
t
-
l
e
f
t
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
m
b
-
2
 
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
 
g
a
p
-
1
.
5
 
s
m
:
j
u
s
t
i
f
y
-
s
t
a
r
t
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
1
 
w
-
1
 
b
g
-
o
r
a
n
g
e
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
a
c
k
t
o
b
e
r
f
e
s
t
 
2
0
2
6


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
m
b
-
1
.
5
 
t
e
x
t
-
l
g
 
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
 
"
G
o
a
l
 
r
e
a
c
h
e
d
!
"
 
:
 
"
Y
o
u
r
 
O
c
t
o
b
e
r
 
p
r
o
g
r
e
s
s
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
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
m
a
x
-
w
-
s
m
 
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
 
"
Y
o
u
 
l
o
g
g
e
d
 
f
o
u
r
 
a
p
p
r
o
v
e
d
 
c
o
n
t
r
i
b
u
t
i
o
n
s
 
t
h
i
s
 
O
c
t
o
b
e
r
.
 
K
e
e
p
 
s
h
i
p
p
i
n
g
!
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
T
r
a
c
k
 
a
p
p
r
o
v
e
d
 
c
o
n
t
r
i
b
u
t
i
o
n
s
 
t
o
w
a
r
d
 
H
a
c
k
t
o
b
e
r
f
e
s
t
'
s
 
f
o
u
r
-
P
R
 
g
o
a
l
.
 
S
u
b
m
i
t
 
r
e
p
o
 
s
u
g
g
e
s
t
i
o
n
s
 
a
n
d
 
c
o
m
p
l
e
t
e
 
y
o
u
r
 
f
i
r
s
t
-
P
R
 
r
o
a
d
m
a
p
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
p
x
 
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
 
b
g
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
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
1
0
 
s
m
:
m
i
n
-
w
-
6
4
"
>


 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
a
p
p
r
o
v
e
d
"
,
 
v
a
l
u
e
:
 
d
a
t
a
.
s
t
a
t
s
.
a
p
p
r
o
v
e
d
C
o
n
t
r
i
b
u
t
i
o
n
s
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
s
u
g
g
e
s
t
i
o
n
s
"
,
 
v
a
l
u
e
:
 
d
a
t
a
.
s
t
a
t
s
.
r
e
p
o
S
u
g
g
e
s
t
i
o
n
s
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
f
i
r
s
t
-
p
r
 
s
t
e
p
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
`
$
{
d
a
t
a
.
s
t
a
t
s
.
f
i
r
s
t
P
r
S
t
e
p
s
C
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
$
{
d
a
t
a
.
s
t
a
t
s
.
f
i
r
s
t
P
r
T
o
t
a
l
S
t
e
p
s
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
c
o
m
p
l
e
t
e
"
,
 
v
a
l
u
e
:
 
`
$
{
d
a
t
a
.
p
e
r
c
e
n
t
}
%
`
 
}
,


 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
s
t
a
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
a
t
.
l
a
b
e
l
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
b
g
-
w
h
i
t
e
 
p
-
3
 
t
e
x
t
-
c
e
n
t
e
r
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
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
5
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
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
2
 
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
2
0
0
 
p
t
-
4
 
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
"
>


 
 
 
 
 
 
 
 
{
d
a
t
a
.
n
o
d
e
s
.
m
a
p
(
(
n
o
d
e
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
n
o
d
e
.
i
d
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
{
`
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
 
p
x
-
2
.
5
 
p
y
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
m
e
d
i
u
m
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
d
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
o
r
a
n
g
e
-
2
0
0
 
b
g
-
o
r
a
n
g
e
-
5
0
 
t
e
x
t
-
o
r
a
n
g
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
b
o
r
d
e
r
-
o
r
a
n
g
e
-
5
0
0
/
3
0
 
d
a
r
k
:
b
g
-
o
r
a
n
g
e
-
5
0
0
/
1
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
o
r
a
n
g
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
 
b
g
-
s
t
o
n
e
-
5
0
 
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
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
5
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
o
d
e
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
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
P
u
l
l
R
e
q
u
e
s
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
h
-
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
n
o
d
e
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


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
s
e
c
o
n
d
a
r
y
"
 
s
i
z
e
=
"
s
m
"
 
a
s
C
h
i
l
d
 
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
l
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
"
>
F
i
n
d
 
r
e
p
o
s
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
<
/
d
i
v
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


