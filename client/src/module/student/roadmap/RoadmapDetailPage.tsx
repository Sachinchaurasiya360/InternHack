
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
S
t
a
t
e
,
 
t
y
p
e
 
R
e
a
c
t
N
o
d
e
 
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
 
L
i
n
k
,
 
u
s
e
P
a
r
a
m
s
 
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
 
C
l
o
c
k
,
 
B
o
o
k
O
p
e
n
,
 
T
a
r
g
e
t
,
 
C
h
e
v
r
o
n
R
i
g
h
t
,
 
A
r
r
o
w
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
,
 
H
e
l
p
C
i
r
c
l
e
,
 
M
a
p
 
a
s
 
M
a
p
I
c
o
n
,
 
U
s
e
r
s
 
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
 
{
 
N
a
v
b
a
r
 
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
N
a
v
b
a
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
 
u
s
e
S
t
u
d
e
n
t
S
i
d
e
b
a
r
 
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
S
t
u
d
e
n
t
S
i
d
e
b
a
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
 
c
a
n
o
n
i
c
a
l
U
r
l
,
 
S
I
T
E
_
U
R
L
 
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
s
e
o
.
u
t
i
l
s
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
 
u
s
e
A
u
t
h
S
t
o
r
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
a
u
t
h
.
s
t
o
r
e
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
 
R
o
a
d
m
a
p
,
 
R
o
a
d
m
a
p
E
n
r
o
l
l
m
e
n
t
L
i
s
t
I
t
e
m
 
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
 
K
i
c
k
e
r
 
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
K
i
c
k
e
r
"
;




f
u
n
c
t
i
o
n
 
C
h
r
o
m
e
(
{
 
c
h
i
l
d
r
e
n
,
 
i
s
S
t
u
d
e
n
t
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
 
}
:
 
{


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
N
o
d
e
;


 
 
i
s
S
t
u
d
e
n
t
:
 
b
o
o
l
e
a
n
;


 
 
s
i
d
e
b
a
r
W
i
d
t
h
:
 
n
u
m
b
e
r
;


 
 
c
o
l
l
a
p
s
e
d
:
 
b
o
o
l
e
a
n
;


 
 
s
i
d
e
b
a
r
:
 
R
e
a
c
t
N
o
d
e
;


}
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
i
n
-
h
-
s
c
r
e
e
n
 
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
5
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
h
i
d
d
e
n
 
l
g
:
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
s
i
d
e
b
a
r
O
f
f
s
e
t
=
{
i
s
S
t
u
d
e
n
t
 
?
 
s
i
d
e
b
a
r
W
i
d
t
h
 
:
 
0
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
l
g
:
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
i
s
S
t
u
d
e
n
t
 
&
&
 
s
i
d
e
b
a
r
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
{
`
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
3
0
0
 
$
{


 
 
 
 
 
 
 
 
 
 
i
s
S
t
u
d
e
n
t
 
?
 
(
c
o
l
l
a
p
s
e
d
 
?
 
"
l
g
:
m
l
-
1
8
"
 
:
 
"
l
g
:
m
l
-
6
4
"
)
 
:
 
"
"


 
 
 
 
 
 
 
 
}
`
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
"
p
t
-
1
6
 
l
g
:
p
t
-
2
4
"
>
{
c
h
i
l
d
r
e
n
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


 
 
)
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
 
R
o
a
d
m
a
p
D
e
t
a
i
l
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
s
l
u
g
 
=
 
"
"
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
{
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,
 
u
s
e
r
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
i
s
S
t
u
d
e
n
t
 
=
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
&
&
 
u
s
e
r
?
.
r
o
l
e
 
=
=
=
 
"
S
T
U
D
E
N
T
"
;


 
 
c
o
n
s
t
 
{
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
s
i
d
e
b
a
r
 
}
 
=
 
u
s
e
S
t
u
d
e
n
t
S
i
d
e
b
a
r
(
)
;


 
 
c
o
n
s
t
 
[
o
p
e
n
F
a
q
,
 
s
e
t
O
p
e
n
F
a
q
]
 
=
 
u
s
e
S
t
a
t
e
<
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
0
)
;




 
 
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
:
 
r
o
a
d
m
a
p
D
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
:
 
r
o
a
d
m
a
p
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
:
 
r
o
a
d
m
a
p
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
r
o
a
d
m
a
p
s
.
d
e
t
a
i
l
(
s
l
u
g
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
<
{
 
r
o
a
d
m
a
p
:
 
R
o
a
d
m
a
p
 
}
>
(
`
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
`
)
.
t
h
e
n
(
r
e
s
 
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
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
s
l
u
g
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
 
1
5
 
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
 
{
 
d
a
t
a
:
 
e
n
r
o
l
l
m
e
n
t
s
D
a
t
a
 
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
r
o
a
d
m
a
p
s
.
e
n
r
o
l
l
m
e
n
t
s
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
<
{
 
e
n
r
o
l
l
m
e
n
t
s
:
 
R
o
a
d
m
a
p
E
n
r
o
l
l
m
e
n
t
L
i
s
t
I
t
e
m
[
]
 
}
>
(
"
/
r
o
a
d
m
a
p
s
/
m
e
/
e
n
r
o
l
l
m
e
n
t
s
"
)
.
t
h
e
n
(
r
e
s
 
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
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
i
s
S
t
u
d
e
n
t
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
 
5
 
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
o
a
d
m
a
p
 
=
 
r
o
a
d
m
a
p
D
a
t
a
?
.
r
o
a
d
m
a
p
 
|
|
 
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
 
e
n
r
o
l
l
m
e
n
t
s
 
=
 
e
n
r
o
l
l
m
e
n
t
s
D
a
t
a
?
.
e
n
r
o
l
l
m
e
n
t
s
 
|
|
 
[
]
;


 
 
c
o
n
s
t
 
l
o
a
d
i
n
g
 
=
 
r
o
a
d
m
a
p
L
o
a
d
i
n
g
;




 
 
c
o
n
s
t
 
c
h
r
o
m
e
P
r
o
p
s
 
=
 
{
 
i
s
S
t
u
d
e
n
t
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
 
}
;




 
 
i
f
 
(
l
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
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
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
c
e
n
t
e
r
 
p
y
-
3
2
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
8
 
w
-
8
 
b
o
r
d
e
r
-
2
 
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
-
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
/
C
h
r
o
m
e
>


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
r
o
a
d
m
a
p
E
r
r
o
r
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
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
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
c
e
n
t
e
r
 
p
y
-
3
2
 
p
x
-
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
5
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
 
m
b
-
2
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
 
r
o
a
d
m
a
p
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
 
m
b
-
6
"
>
T
h
e
r
e
 
w
a
s
 
a
 
p
r
o
b
l
e
m
 
c
o
n
n
e
c
t
i
n
g
 
t
o
 
t
h
e
 
s
e
r
v
e
r
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
w
i
n
d
o
w
.
l
o
c
a
t
i
o
n
.
r
e
l
o
a
d
(
)
}
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
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
>
R
e
t
r
y
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
d
i
v
>


 
 
 
 
 
 
<
/
C
h
r
o
m
e
>


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
!
r
o
a
d
m
a
p
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
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
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
c
e
n
t
e
r
 
p
y
-
3
2
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
5
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
 
m
b
-
2
"
>
R
o
a
d
m
a
p
 
n
o
t
 
f
o
u
n
d
<
/
p
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
r
o
a
d
m
a
p
s
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
l
i
m
e
-
6
0
0
 
h
o
v
e
r
:
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
B
r
o
w
s
e
 
a
l
l
 
r
o
a
d
m
a
p
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
C
h
r
o
m
e
>


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
c
o
u
r
s
e
S
c
h
e
m
a
 
=
 
{


 
 
 
 
"
@
c
o
n
t
e
x
t
"
:
 
"
h
t
t
p
s
:
/
/
s
c
h
e
m
a
.
o
r
g
"
,


 
 
 
 
"
@
t
y
p
e
"
:
 
"
C
o
u
r
s
e
"
,


 
 
 
 
n
a
m
e
:
 
r
o
a
d
m
a
p
.
t
i
t
l
e
,


 
 
 
 
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
:
 
r
o
a
d
m
a
p
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
,


 
 
 
 
p
r
o
v
i
d
e
r
:
 
{


 
 
 
 
 
 
"
@
t
y
p
e
"
:
 
"
O
r
g
a
n
i
z
a
t
i
o
n
"
,


 
 
 
 
 
 
n
a
m
e
:
 
"
I
n
t
e
r
n
H
a
c
k
"
,


 
 
 
 
 
 
s
a
m
e
A
s
:
 
S
I
T
E
_
U
R
L
,


 
 
 
 
}
,


 
 
 
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
r
o
a
d
m
a
p
s
/
$
{
r
o
a
d
m
a
p
.
s
l
u
g
}
`
,


 
 
 
 
e
d
u
c
a
t
i
o
n
a
l
L
e
v
e
l
:
 
r
o
a
d
m
a
p
.
l
e
v
e
l
,


 
 
 
 
t
i
m
e
R
e
q
u
i
r
e
d
:
 
`
P
T
$
{
r
o
a
d
m
a
p
.
e
s
t
i
m
a
t
e
d
H
o
u
r
s
}
H
`
,


 
 
 
 
t
e
a
c
h
e
s
:
 
r
o
a
d
m
a
p
.
o
u
t
c
o
m
e
s
,


 
 
 
 
c
o
u
r
s
e
P
r
e
r
e
q
u
i
s
i
t
e
s
:
 
r
o
a
d
m
a
p
.
p
r
e
r
e
q
u
i
s
i
t
e
s
,


 
 
 
 
i
s
A
c
c
e
s
s
i
b
l
e
F
o
r
F
r
e
e
:
 
!
r
o
a
d
m
a
p
.
i
s
P
r
e
m
i
u
m
,


 
 
 
 
h
a
s
C
o
u
r
s
e
I
n
s
t
a
n
c
e
:
 
{


 
 
 
 
 
 
"
@
t
y
p
e
"
:
 
"
C
o
u
r
s
e
I
n
s
t
a
n
c
e
"
,


 
 
 
 
 
 
c
o
u
r
s
e
M
o
d
e
:
 
"
O
n
l
i
n
e
"
,


 
 
 
 
 
 
c
o
u
r
s
e
W
o
r
k
l
o
a
d
:
 
`
P
T
$
{
r
o
a
d
m
a
p
.
e
s
t
i
m
a
t
e
d
H
o
u
r
s
}
H
`
,


 
 
 
 
}
,


 
 
}
;




 
 
c
o
n
s
t
 
f
a
q
S
c
h
e
m
a
 
=
 
r
o
a
d
m
a
p
.
f
a
q
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
 
{


 
 
 
 
"
@
c
o
n
t
e
x
t
"
:
 
"
h
t
t
p
s
:
/
/
s
c
h
e
m
a
.
o
r
g
"
,


 
 
 
 
"
@
t
y
p
e
"
:
 
"
F
A
Q
P
a
g
e
"
,


 
 
 
 
m
a
i
n
E
n
t
i
t
y
:
 
r
o
a
d
m
a
p
.
f
a
q
s
.
m
a
p
(
(
f
)
 
=
>
 
(
{


 
 
 
 
 
 
"
@
t
y
p
e
"
:
 
"
Q
u
e
s
t
i
o
n
"
,


 
 
 
 
 
 
n
a
m
e
:
 
f
.
q
,


 
 
 
 
 
 
a
c
c
e
p
t
e
d
A
n
s
w
e
r
:
 
{
 
"
@
t
y
p
e
"
:
 
"
A
n
s
w
e
r
"
,
 
t
e
x
t
:
 
f
.
a
 
}
,


 
 
 
 
}
)
)
,


 
 
}
 
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
 
m
y
E
n
r
o
l
l
m
e
n
t
 
=
 
e
n
r
o
l
l
m
e
n
t
s
.
f
i
n
d
(
(
e
)
 
=
>
 
e
.
r
o
a
d
m
a
p
.
s
l
u
g
 
=
=
=
 
r
o
a
d
m
a
p
.
s
l
u
g
)
;


 
 
c
o
n
s
t
 
h
a
s
O
t
h
e
r
E
n
r
o
l
l
m
e
n
t
s
 
=
 
e
n
r
o
l
l
m
e
n
t
s
.
l
e
n
g
t
h
 
>
 
(
m
y
E
n
r
o
l
l
m
e
n
t
 
?
 
1
 
:
 
0
)
;




 
 
c
o
n
s
t
 
e
n
r
o
l
l
H
r
e
f
 
=
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d


 
 
 
 
?
 
(
m
y
E
n
r
o
l
l
m
e
n
t
 
?
 
`
/
l
e
a
r
n
/
r
o
a
d
m
a
p
s
/
$
{
r
o
a
d
m
a
p
.
s
l
u
g
}
`
 
:
 
`
/
r
o
a
d
m
a
p
s
/
$
{
r
o
a
d
m
a
p
.
s
l
u
g
}
/
e
n
r
o
l
l
`
)


 
 
 
 
:
 
`
/
l
o
g
i
n
?
f
r
o
m
=
$
{
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
`
/
r
o
a
d
m
a
p
s
/
$
{
r
o
a
d
m
a
p
.
s
l
u
g
}
/
e
n
r
o
l
l
`
)
}
`
;




 
 
c
o
n
s
t
 
c
t
a
L
a
b
e
l
 
=
 
m
y
E
n
r
o
l
l
m
e
n
t
 
?
 
"
R
e
s
u
m
e
 
t
h
i
s
 
r
o
a
d
m
a
p
"
 
:
 
"
S
t
a
r
t
 
t
h
i
s
 
r
o
a
d
m
a
p
"
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
}
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
{
`
$
{
r
o
a
d
m
a
p
.
t
i
t
l
e
}
 
(
F
r
e
e
)
`
}


 
 
 
 
 
 
 
 
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
=
{
r
o
a
d
m
a
p
.
s
h
o
r
t
D
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


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
`
/
r
o
a
d
m
a
p
s
/
$
{
r
o
a
d
m
a
p
.
s
l
u
g
}
`
)
}


 
 
 
 
 
 
 
 
o
g
I
m
a
g
e
=
{
r
o
a
d
m
a
p
.
o
g
I
m
a
g
e
 
|
|
 
r
o
a
d
m
a
p
.
c
o
v
e
r
I
m
a
g
e
 
|
|
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
o
g
T
y
p
e
=
"
a
r
t
i
c
l
e
"


 
 
 
 
 
 
 
 
n
o
I
n
d
e
x
=
{
!
r
o
a
d
m
a
p
.
i
s
P
u
b
l
i
s
h
e
d
}


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
f
a
q
S
c
h
e
m
a
 
?
 
[
c
o
u
r
s
e
S
c
h
e
m
a
,
 
f
a
q
S
c
h
e
m
a
]
 
:
 
c
o
u
r
s
e
S
c
h
e
m
a
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
H
e
r
o
 
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
r
e
l
a
t
i
v
e
 
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
 
-
z
-
1
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
o
p
-
4
0
 
l
e
f
t
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
x
-
1
/
2
 
w
-
2
0
0
 
h
-
2
0
0
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
-
l
i
m
e
-
1
0
0
 
v
i
a
-
t
r
a
n
s
p
a
r
e
n
t
 
t
o
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
f
r
o
m
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
2
0
 
d
a
r
k
:
v
i
a
-
t
r
a
n
s
p
a
r
e
n
t
 
d
a
r
k
:
t
o
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
/
3
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
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
6
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
m
a
x
-
w
-
5
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
p
t
-
6
 
p
b
-
1
6
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
"
V
i
e
w
 
m
y
 
r
o
a
d
m
a
p
s
"
 
p
i
l
l
 
f
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
i
s
S
t
u
d
e
n
t
 
&
&
 
(
m
y
E
n
r
o
l
l
m
e
n
t
 
|
|
 
h
a
s
O
t
h
e
r
E
n
r
o
l
l
m
e
n
t
s
)
 
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
 
y
:
 
-
6
 
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
6
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
r
o
a
d
m
a
p
s
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
2
 
p
x
-
3
 
p
y
-
1
.
5
 
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
s
t
o
n
e
-
8
0
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
l
i
m
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
l
i
m
e
-
6
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
s
t
o
n
e
-
9
5
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
M
a
p
I
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
y
E
n
r
o
l
l
m
e
n
t
 
?
 
"
y
o
u
'
r
e
 
e
n
r
o
l
l
e
d
"
 
:
 
`
$
{
e
n
r
o
l
l
m
e
n
t
s
.
l
e
n
g
t
h
}
 
a
c
t
i
v
e
`
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
3
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
7
0
0
"
>
/
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
 
m
y
 
r
o
a
d
m
a
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
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
3
 
h
-
3
"
 
/
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
}




 
 
 
 
 
 
 
 
 
 
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
8
 
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
6
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
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
m
b
-
5
"
>
r
o
a
d
m
a
p
 
·
 
{
r
o
a
d
m
a
p
.
l
e
v
e
l
.
r
e
p
l
a
c
e
(
"
_
"
,
 
"
 
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
}
<
/
K
i
c
k
e
r
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
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
6
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
5
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
 
m
b
-
5
 
l
e
a
d
i
n
g
-
[
1
.
0
5
]
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
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
l
g
 
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
 
m
a
x
-
w
-
3
x
l
 
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
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
.
s
h
o
r
t
D
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
x
-
6
 
g
a
p
-
y
-
2
 
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
 
m
b
-
8
 
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
2
"
>
<
C
l
o
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
w
-
4
 
h
-
4
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
=
"
t
r
u
e
"
 
/
>
 
{
r
o
a
d
m
a
p
.
e
s
t
i
m
a
t
e
d
H
o
u
r
s
}
 
h
o
u
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
2
"
>
<
B
o
o
k
O
p
e
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
4
 
h
-
4
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
=
"
t
r
u
e
"
 
/
>
 
{
r
o
a
d
m
a
p
.
t
o
p
i
c
C
o
u
n
t
}
 
t
o
p
i
c
s
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
2
"
>
<
U
s
e
r
s
 
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
=
"
t
r
u
e
"
 
/
>
 
{
r
o
a
d
m
a
p
.
e
n
r
o
l
l
e
d
C
o
u
n
t
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
 
e
n
r
o
l
l
e
d
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
2
"
>
<
T
a
r
g
e
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
=
"
t
r
u
e
"
 
/
>
 
F
r
e
e
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
s
i
z
e
=
"
l
g
"
 
v
a
r
i
a
n
t
=
"
m
o
n
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
{
e
n
r
o
l
l
H
r
e
f
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
t
a
L
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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
 
m
l
-
1
"
 
/
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
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
s
i
z
e
=
"
l
g
"
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
#
s
y
l
l
a
b
u
s
"
>
V
i
e
w
 
s
y
l
l
a
b
u
s
<
/
a
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
a
x
-
w
-
5
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
p
y
-
1
4
 
g
r
i
d
 
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
3
 
g
a
p
-
1
0
"
>


 
 
 
 
 
 
 
 
{
/
*
 
M
a
i
n
 
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
l
g
:
c
o
l
-
s
p
a
n
-
2
 
s
p
a
c
e
-
y
-
1
2
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
W
h
a
t
 
y
o
u
'
l
l
 
l
e
a
r
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
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
f
o
n
t
-
d
i
s
p
l
a
y
 
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
s
t
o
n
e
-
9
5
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
 
m
b
-
5
"
>
W
h
a
t
 
y
o
u
 
w
i
l
l
 
l
e
a
r
n
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
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
 
s
m
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
.
o
u
t
c
o
m
e
s
.
m
a
p
(
(
o
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
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
s
t
o
n
e
-
3
0
0
 
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
l
i
m
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
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
y
l
l
a
b
u
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
i
d
=
"
s
y
l
l
a
b
u
s
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
f
o
n
t
-
d
i
s
p
l
a
y
 
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
s
t
o
n
e
-
9
5
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
 
m
b
-
5
"
>
S
y
l
l
a
b
u
s
<
/
h
2
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
.
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
e
c
t
i
o
n
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
e
t
a
i
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
e
c
t
i
o
n
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
e
n
=
{
i
 
=
=
=
 
0
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
2
x
l
 
g
r
o
u
p
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
u
m
m
a
r
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
 
g
a
p
-
3
 
p
-
5
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
l
i
s
t
-
n
o
n
e
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
2
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
i
n
s
e
t
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
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
2
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
4
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
c
t
i
o
n
 
{
i
 
+
 
1
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
5
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
e
c
t
i
o
n
.
t
i
t
l
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
x
s
 
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
 
m
t
-
0
.
5
"
>
{
s
e
c
t
i
o
n
.
s
u
m
m
a
r
y
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
C
h
e
v
r
o
n
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
4
0
0
 
g
r
o
u
p
-
o
p
e
n
:
r
o
t
a
t
e
-
9
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
t
r
a
n
s
f
o
r
m
 
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
=
"
t
r
u
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
u
m
m
a
r
y
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
x
-
5
 
p
b
-
5
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
t
o
p
i
c
s
.
m
a
p
(
(
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
r
o
a
d
m
a
p
s
/
$
{
r
o
a
d
m
a
p
.
s
l
u
g
}
/
t
o
p
i
c
s
/
$
{
t
.
s
l
u
g
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
 
g
a
p
-
3
 
p
x
-
4
 
p
y
-
3
 
r
o
u
n
d
e
d
-
x
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
/
5
0
 
h
o
v
e
r
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
1
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
i
n
-
w
-
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
1
0
0
 
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
t
.
t
i
t
l
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
x
s
 
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
 
m
t
-
0
.
5
 
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
t
.
s
u
m
m
a
r
y
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
{
t
.
e
s
t
i
m
a
t
e
d
H
o
u
r
s
}
h
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
e
t
a
i
l
s
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
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
A
Q
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
.
f
a
q
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
s
e
c
t
i
o
n
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
f
o
n
t
-
d
i
s
p
l
a
y
 
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
s
t
o
n
e
-
9
5
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
 
m
b
-
5
"
>
Q
u
e
s
t
i
o
n
s
<
/
h
2
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
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
.
f
a
q
s
.
m
a
p
(
(
f
,
 
i
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
i
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
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
{
`
f
a
q
-
b
t
n
-
$
{
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
e
x
p
a
n
d
e
d
=
{
o
p
e
n
F
a
q
 
=
=
=
 
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
c
o
n
t
r
o
l
s
=
{
`
f
a
q
-
p
a
n
e
l
-
$
{
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
O
p
e
n
F
a
q
(
o
p
e
n
F
a
q
 
=
=
=
 
i
 
?
 
n
u
l
l
 
:
 
i
)
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
w
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
b
e
t
w
e
e
n
 
g
a
p
-
3
 
p
-
4
 
t
e
x
t
-
l
e
f
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
2
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
i
n
s
e
t
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
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
x
l
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
5
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
H
e
l
p
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
l
i
m
e
-
5
0
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
=
"
t
r
u
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
q
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
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
{
`
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
t
r
a
n
s
f
o
r
m
 
s
h
r
i
n
k
-
0
 
$
{
o
p
e
n
F
a
q
 
=
=
=
 
i
 
?
 
"
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
 
:
 
"
"
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
=
"
t
r
u
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
e
n
F
a
q
 
=
=
=
 
i
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
{
`
f
a
q
-
p
a
n
e
l
-
$
{
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
r
e
g
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
l
e
d
b
y
=
{
`
f
a
q
-
b
t
n
-
$
{
i
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
p
x
-
4
 
p
b
-
4
 
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
f
.
a
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
s
e
c
t
i
o
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




 
 
 
 
 
 
 
 
{
/
*
 
S
i
d
e
b
a
r
 
*
/
}


 
 
 
 
 
 
 
 
<
a
s
i
d
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
l
g
:
s
t
i
c
k
y
 
l
g
:
t
o
p
-
2
8
 
l
g
:
s
e
l
f
-
s
t
a
r
t
 
s
p
a
c
e
-
y
-
5
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
2
x
l
 
p
-
5
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
4
0
0
 
m
b
-
3
"
>
P
r
e
r
e
q
u
i
s
i
t
e
s
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
.
p
r
e
r
e
q
u
i
s
i
t
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>
N
o
n
e
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
.
p
r
e
r
e
q
u
i
s
i
t
e
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
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
s
t
o
n
e
-
3
0
0
 
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
p
}
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
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
s
t
o
n
e
-
9
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
5
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
9
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
2
x
l
 
p
-
5
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
 
f
o
n
t
-
b
o
l
d
 
m
b
-
2
"
>
{
m
y
E
n
r
o
l
l
m
e
n
t
 
?
 
"
P
i
c
k
 
u
p
 
w
h
e
r
e
 
y
o
u
 
l
e
f
t
 
o
f
f
"
 
:
 
"
R
e
a
d
y
 
t
o
 
s
t
a
r
t
?
"
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
x
s
 
o
p
a
c
i
t
y
-
8
0
 
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
m
y
E
n
r
o
l
l
m
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
O
p
e
n
 
y
o
u
r
 
i
n
t
e
r
a
c
t
i
v
e
 
c
a
n
v
a
s
,
 
m
a
r
k
 
t
o
p
i
c
s
 
c
o
m
p
l
e
t
e
,
 
a
n
d
 
t
r
a
c
k
 
p
r
o
g
r
e
s
s
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
T
e
l
l
 
u
s
 
y
o
u
r
 
h
o
u
r
s
 
p
e
r
 
w
e
e
k
,
 
g
e
t
 
a
 
p
e
r
s
o
n
a
l
i
z
e
d
 
w
e
e
k
l
y
 
p
l
a
n
 
a
n
d
 
a
 
P
D
F
 
y
o
u
 
c
a
n
 
k
e
e
p
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
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
w
-
f
u
l
l
"
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
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
{
e
n
r
o
l
l
H
r
e
f
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
t
a
L
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
S
t
u
d
e
n
t
 
&
&
 
e
n
r
o
l
l
m
e
n
t
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
r
o
a
d
m
a
p
s
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
m
t
-
3
 
b
l
o
c
k
 
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
 
o
p
a
c
i
t
y
-
7
0
 
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
 
m
y
 
r
o
a
d
m
a
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
a
s
i
d
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
C
h
r
o
m
e
>


 
 
)
;


}


