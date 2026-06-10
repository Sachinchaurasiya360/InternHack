
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
 


 
 
A
l
e
r
t
C
i
r
c
l
e
,
 


 
 
T
h
u
m
b
s
U
p
,
 


 
 
T
h
u
m
b
s
D
o
w
n
,
 


 
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,
 


 
 
B
a
r
C
h
a
r
t
3
,
 


 
 
S
h
i
e
l
d
A
l
e
r
t


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
 
S
E
O
 
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
S
E
O
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
o
a
d
i
n
g
S
c
r
e
e
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
L
o
a
d
i
n
g
S
c
r
e
e
n
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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


 
 
B
a
r
C
h
a
r
t
,


 
 
B
a
r
,


 
 
X
A
x
i
s
,


 
 
Y
A
x
i
s
,


 
 
C
a
r
t
e
s
i
a
n
G
r
i
d
,


 
 
T
o
o
l
t
i
p
,


 
 
R
e
s
p
o
n
s
i
v
e
C
o
n
t
a
i
n
e
r
,


 
 
C
e
l
l


}
 
f
r
o
m
 
"
r
e
c
h
a
r
t
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
 
S
t
e
p
S
t
a
t
 
{


 
 
g
u
i
d
e
I
d
:
 
s
t
r
i
n
g
;


 
 
s
t
e
p
I
d
:
 
s
t
r
i
n
g
;


 
 
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
;


 
 
u
p
:
 
n
u
m
b
e
r
;


 
 
s
a
t
i
s
f
a
c
t
i
o
n
R
a
t
e
:
 
n
u
m
b
e
r
;


 
 
r
e
a
s
o
n
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
;


}




i
n
t
e
r
f
a
c
e
 
A
n
a
l
y
t
i
c
s
D
a
t
a
 
{


 
 
g
l
o
b
a
l
:
 
{


 
 
 
 
t
o
t
a
l
F
e
e
d
b
a
c
k
:
 
n
u
m
b
e
r
;


 
 
 
 
s
a
t
i
s
f
a
c
t
i
o
n
R
a
t
e
:
 
n
u
m
b
e
r
;


 
 
}
;


 
 
b
o
t
t
o
m
5
S
t
e
p
s
:
 
S
t
e
p
S
t
a
t
[
]
;


 
 
r
e
a
s
o
n
S
u
m
m
a
r
y
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
G
u
i
d
e
F
e
e
d
b
a
c
k
D
a
s
h
b
o
a
r
d
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
 
[
"
a
d
m
i
n
"
,
 
"
g
u
i
d
e
-
f
e
e
d
b
a
c
k
"
]
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
a
d
m
i
n
/
g
u
i
d
e
-
f
e
e
d
b
a
c
k
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
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
 
a
s
 
A
n
a
l
y
t
i
c
s
D
a
t
a
)
,


 
 
}
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
 
r
e
t
u
r
n
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
/
>
;




 
 
i
f
 
(
!
d
a
t
a
 
|
|
 
d
a
t
a
.
g
l
o
b
a
l
.
t
o
t
a
l
F
e
e
d
b
a
c
k
 
=
=
=
 
0
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
 
m
i
n
-
h
-
[
6
0
v
h
]
 
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
x
-
4
"
>


 
 
 
 
 
 
 
 
<
S
E
O
 
t
i
t
l
e
=
"
G
u
i
d
e
 
F
e
e
d
b
a
c
k
 
A
n
a
l
y
t
i
c
s
"
 
n
o
I
n
d
e
x
 
/
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
6
 
h
-
1
6
 
b
g
-
g
r
a
y
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
m
d
 
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
 
m
b
-
4
 
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
g
r
a
y
-
7
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
M
e
s
s
a
g
e
S
q
u
a
r
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
8
 
h
-
8
 
t
e
x
t
-
g
r
a
y
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
t
e
x
t
-
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
e
x
t
-
w
h
i
t
e
 
m
b
-
2
"
>
N
o
 
f
e
e
d
b
a
c
k
 
d
a
t
a
 
y
e
t
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
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
a
x
-
w
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
F
e
e
d
b
a
c
k
 
a
n
a
l
y
t
i
c
s
 
w
i
l
l
 
a
p
p
e
a
r
 
h
e
r
e
 
o
n
c
e
 
s
t
u
d
e
n
t
s
 
s
t
a
r
t
 
r
a
t
i
n
g
 
g
u
i
d
e
 
s
t
e
p
s
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
 
f
l
a
g
g
e
d
S
t
e
p
s
 
=
 
d
a
t
a
.
b
o
t
t
o
m
5
S
t
e
p
s
.
f
i
l
t
e
r
(
s
 
=
>
 
s
.
s
a
t
i
s
f
a
c
t
i
o
n
R
a
t
e
 
<
 
6
0
 
&
&
 
s
.
t
o
t
a
l
 
>
 
5
)
;




 
 
c
o
n
s
t
 
r
e
a
s
o
n
C
h
a
r
t
D
a
t
a
 
=
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
d
a
t
a
.
r
e
a
s
o
n
S
u
m
m
a
r
y
)
.
m
a
p
(
(
[
n
a
m
e
,
 
v
a
l
u
e
]
)
 
=
>
 
(
{


 
 
 
 
n
a
m
e
:
 
n
a
m
e
.
r
e
p
l
a
c
e
(
/
_
/
g
,
 
'
 
'
)
.
r
e
p
l
a
c
e
(
/
\
b
\
w
/
g
,
 
l
 
=
>
 
l
.
t
o
U
p
p
e
r
C
a
s
e
(
)
)
,


 
 
 
 
v
a
l
u
e


 
 
}
)
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
b
.
v
a
l
u
e
 
-
 
a
.
v
a
l
u
e
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
8
"
>


 
 
 
 
 
 
<
S
E
O
 
t
i
t
l
e
=
"
G
u
i
d
e
 
F
e
e
d
b
a
c
k
 
A
n
a
l
y
t
i
c
s
"
 
n
o
I
n
d
e
x
 
/
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
"
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
2
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
>
G
u
i
d
e
 
C
o
n
t
e
n
t
 
A
n
a
l
y
t
i
c
s
<
/
h
1
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
g
r
a
y
-
4
0
0
 
t
e
x
t
-
s
m
 
m
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
M
o
n
i
t
o
r
 
s
t
u
d
e
n
t
 
s
a
t
i
s
f
a
c
t
i
o
n
 
a
n
d
 
i
d
e
n
t
i
f
y
 
c
o
n
t
e
n
t
 
f
r
i
c
t
i
o
n
 
p
o
i
n
t
s
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


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
f
l
a
g
g
e
d
S
t
e
p
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
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
 
s
c
a
l
e
:
 
0
.
9
5
 
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
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
s
c
a
l
e
:
 
0
.
9
5
 
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
p
-
4
 
b
g
-
r
e
d
-
9
0
0
/
2
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
r
e
d
-
5
0
0
/
5
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
4
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
p
-
2
 
b
g
-
r
e
d
-
5
0
0
/
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
l
g
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
A
l
e
r
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
5
 
h
-
5
 
t
e
x
t
-
r
e
d
-
4
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


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
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
r
e
d
-
4
0
0
 
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
m
"
>
A
t
t
e
n
t
i
o
n
 
R
e
q
u
i
r
e
d
<
/
h
3
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
r
e
d
-
3
0
0
/
8
0
 
t
e
x
t
-
s
m
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
e
 
f
o
l
l
o
w
i
n
g
 
s
t
e
p
s
 
r
e
q
u
i
r
e
 
i
m
m
e
d
i
a
t
e
 
c
o
n
t
e
n
t
 
r
e
v
i
s
i
o
n
 
d
u
e
 
t
o
 
l
o
w
 
s
a
t
i
s
f
a
c
t
i
o
n
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
l
a
g
g
e
d
S
t
e
p
s
.
m
a
p
(
s
 
=
>
 
`
$
{
s
.
g
u
i
d
e
I
d
}
/
$
{
s
.
s
t
e
p
I
d
}
`
)
.
j
o
i
n
(
"
,
 
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
1
 
m
d
:
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
3
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
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
 
2
0
 
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
g
r
a
y
-
9
0
0
 
p
-
6
 
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
g
r
a
y
-
8
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
 
m
b
-
2
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
g
r
a
y
-
4
0
0
 
t
e
x
t
-
s
m
 
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
"
>
T
o
t
a
l
 
F
e
e
d
b
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
M
e
s
s
a
g
e
S
q
u
a
r
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
"
 
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
e
x
t
-
w
h
i
t
e
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
.
g
l
o
b
a
l
.
t
o
t
a
l
F
e
e
d
b
a
c
k
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
m
t
-
2
"
>
L
i
f
e
t
i
m
e
 
s
t
e
p
 
r
a
t
i
n
g
s
<
/
p
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
 
2
0
 
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
:
 
0
.
1
 
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
b
g
-
g
r
a
y
-
9
0
0
 
p
-
6
 
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
g
r
a
y
-
8
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
 
m
b
-
2
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
g
r
a
y
-
4
0
0
 
t
e
x
t
-
s
m
 
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
"
>
A
v
g
.
 
S
a
t
i
s
f
a
c
t
i
o
n
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
T
h
u
m
b
s
U
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
"
 
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
e
x
t
-
w
h
i
t
e
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
.
g
l
o
b
a
l
.
s
a
t
i
s
f
a
c
t
i
o
n
R
a
t
e
.
t
o
F
i
x
e
d
(
1
)
}
%


 
 
 
 
 
 
 
 
 
 
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
2
 
h
-
1
.
5
 
w
-
f
u
l
l
 
b
g
-
g
r
a
y
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
d
a
t
a
.
g
l
o
b
a
l
.
s
a
t
i
s
f
a
c
t
i
o
n
R
a
t
e
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
 
2
0
 
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
:
 
0
.
2
 
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
b
g
-
g
r
a
y
-
9
0
0
 
p
-
6
 
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
g
r
a
y
-
8
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
 
m
b
-
2
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
g
r
a
y
-
4
0
0
 
t
e
x
t
-
s
m
 
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
"
>
B
o
t
t
o
m
 
P
e
r
f
o
r
m
e
r
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
C
i
r
c
l
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
4
 
h
-
4
 
t
e
x
t
-
r
e
d
-
4
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
e
x
t
-
w
h
i
t
e
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
.
b
o
t
t
o
m
5
S
t
e
p
s
.
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
m
t
-
2
"
>
S
t
e
p
s
 
w
i
t
h
 
l
o
w
 
r
a
t
i
n
g
s
<
/
p
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
1
 
l
g
:
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
8
"
>


 
 
 
 
 
 
 
 
{
/
*
 
W
o
r
s
t
 
P
e
r
f
o
r
m
i
n
g
 
S
t
e
p
s
 
*
/
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
b
g
-
g
r
a
y
-
9
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
g
r
a
y
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
m
d
 
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
 
s
h
a
d
o
w
-
x
l
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
p
-
6
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
b
g
-
g
r
a
y
-
9
0
0
/
5
0
"
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
w
h
i
t
e
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
h
u
m
b
s
D
o
w
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
w
-
5
 
h
-
5
 
t
e
x
t
-
r
e
d
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
r
i
t
i
c
a
l
 
C
o
n
t
e
n
t
 
F
r
i
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
a
b
l
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
f
u
l
l
 
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
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
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
g
r
a
y
-
9
0
0
/
8
0
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
t
e
x
t
-
x
s
 
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
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
p
x
-
6
 
p
y
-
4
 
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
"
>
G
u
i
d
e
 
/
 
S
t
e
p
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
p
x
-
6
 
p
y
-
4
 
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
"
>
R
a
t
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
p
x
-
6
 
p
y
-
4
 
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
"
>
V
o
l
u
m
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
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
p
x
-
6
 
p
y
-
4
 
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
"
>
M
a
i
n
 
I
s
s
u
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
 
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
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
-
g
r
a
y
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
.
b
o
t
t
o
m
5
S
t
e
p
s
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
a
t
a
.
b
o
t
t
o
m
5
S
t
e
p
s
.
m
a
p
(
(
s
t
e
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
p
R
e
a
s
o
n
 
=
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
s
t
e
p
.
r
e
a
s
o
n
s
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
b
[
1
]
 
-
 
a
[
1
]
)
[
0
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
`
$
{
s
t
e
p
.
g
u
i
d
e
I
d
}
-
$
{
s
t
e
p
.
s
t
e
p
I
d
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
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
0
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
6
 
p
y
-
4
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
w
h
i
t
e
 
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
 
t
e
x
t
-
s
m
 
c
a
p
i
t
a
l
i
z
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
g
u
i
d
e
I
d
.
s
p
l
i
t
(
'
/
'
)
.
p
o
p
(
)
?
.
r
e
p
l
a
c
e
(
/
-
/
g
,
 
'
 
'
)
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
x
s
"
>
S
t
e
p
:
 
{
s
t
e
p
.
s
t
e
p
I
d
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
6
 
p
y
-
4
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
{
`
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
$
{
s
t
e
p
.
s
a
t
i
s
f
a
c
t
i
o
n
R
a
t
e
 
<
 
6
0
 
?
 
'
t
e
x
t
-
r
e
d
-
4
0
0
'
 
:
 
'
t
e
x
t
-
y
e
l
l
o
w
-
4
0
0
'
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
s
a
t
i
s
f
a
c
t
i
o
n
R
a
t
e
.
t
o
F
i
x
e
d
(
0
)
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
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
6
 
p
y
-
4
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
g
r
a
y
-
4
0
0
 
t
e
x
t
-
s
m
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>
{
s
t
e
p
.
t
o
t
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
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
6
 
p
y
-
4
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
x
s
 
i
t
a
l
i
c
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
R
e
a
s
o
n
 
?
 
t
o
p
R
e
a
s
o
n
[
0
]
.
r
e
p
l
a
c
e
(
/
_
/
g
,
 
'
 
'
)
 
:
 
"
M
i
x
e
d
 
f
e
e
d
b
a
c
k
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
o
l
S
p
a
n
=
{
4
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
p
x
-
6
 
p
y
-
1
2
 
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
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
c
r
i
t
i
c
a
l
 
f
r
i
c
t
i
o
n
 
p
o
i
n
t
s
 
i
d
e
n
t
i
f
i
e
d
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
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




 
 
 
 
 
 
 
 
{
/
*
 
R
e
a
s
o
n
 
S
u
m
m
a
r
y
 
C
h
a
r
t
 
*
/
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
b
g
-
g
r
a
y
-
9
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
g
r
a
y
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
m
d
 
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
 
s
h
a
d
o
w
-
x
l
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
p
-
6
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
b
g
-
g
r
a
y
-
9
0
0
/
5
0
"
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
w
h
i
t
e
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
a
r
C
h
a
r
t
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
w
-
5
 
h
-
5
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
a
s
o
n
s
 
f
o
r
 
C
o
n
f
u
s
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
p
-
6
 
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
h
-
[
3
0
0
p
x
]
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
a
s
o
n
C
h
a
r
t
D
a
t
a
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
s
p
o
n
s
i
v
e
C
o
n
t
a
i
n
e
r
 
w
i
d
t
h
=
"
1
0
0
%
"
 
h
e
i
g
h
t
=
{
3
0
0
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
a
r
C
h
a
r
t
 
d
a
t
a
=
{
r
e
a
s
o
n
C
h
a
r
t
D
a
t
a
}
 
l
a
y
o
u
t
=
"
v
e
r
t
i
c
a
l
"
 
m
a
r
g
i
n
=
{
{
 
l
e
f
t
:
 
4
0
,
 
r
i
g
h
t
:
 
2
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
r
t
e
s
i
a
n
G
r
i
d
 
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
"
3
 
3
"
 
s
t
r
o
k
e
=
"
#
3
7
4
1
5
1
"
 
h
o
r
i
z
o
n
t
a
l
=
{
f
a
l
s
e
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
A
x
i
s
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
s
t
r
o
k
e
=
"
#
9
C
A
3
A
F
"
 
f
o
n
t
S
i
z
e
=
{
1
2
}
 
t
i
c
k
L
i
n
e
=
{
f
a
l
s
e
}
 
a
x
i
s
L
i
n
e
=
{
f
a
l
s
e
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
Y
A
x
i
s
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
a
t
a
K
e
y
=
"
n
a
m
e
"
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
c
a
t
e
g
o
r
y
"
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
9
C
A
3
A
F
"
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
1
}
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
c
k
L
i
n
e
=
{
f
a
l
s
e
}
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
x
i
s
L
i
n
e
=
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
1
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
o
o
l
t
i
p
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
=
{
{
 
f
i
l
l
:
 
'
r
g
b
a
(
2
5
5
,
 
2
5
5
,
 
2
5
5
,
 
0
.
0
5
)
'
 
}
}
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
S
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
C
o
l
o
r
:
 
'
#
1
1
1
8
2
7
'
,
 
b
o
r
d
e
r
:
 
'
1
p
x
 
s
o
l
i
d
 
#
3
7
4
1
5
1
'
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
'
8
p
x
'
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
t
e
m
S
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
'
#
f
f
f
'
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
a
r
 
d
a
t
a
K
e
y
=
"
v
a
l
u
e
"
 
r
a
d
i
u
s
=
{
[
0
,
 
4
,
 
4
,
 
0
]
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
a
s
o
n
C
h
a
r
t
D
a
t
a
.
m
a
p
(
(
_
e
n
t
r
y
,
 
i
n
d
e
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
e
l
l
 
k
e
y
=
{
`
c
e
l
l
-
$
{
i
n
d
e
x
}
`
}
 
f
i
l
l
=
{
i
n
d
e
x
 
=
=
=
 
0
 
?
 
'
#
a
8
a
2
9
e
'
 
:
 
'
#
4
b
5
5
6
3
'
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
a
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
a
r
C
h
a
r
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
R
e
s
p
o
n
s
i
v
e
C
o
n
t
a
i
n
e
r
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
h
-
f
u
l
l
 
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
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
i
t
a
l
i
c
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
n
s
u
f
f
i
c
i
e
n
t
 
c
o
n
f
u
s
i
o
n
 
d
a
t
a
 
t
o
 
v
i
s
u
a
l
i
z
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
d
i
v
>


 
 
)
;


}


