
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
M
e
m
o
,
 
u
s
e
S
t
a
t
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


 
 
S
e
a
r
c
h
,


 
 
R
a
d
a
r
,


 
 
D
o
l
l
a
r
S
i
g
n
,


 
 
C
l
o
c
k
,


 
 
M
a
p
P
i
n
,


 
 
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


 
 
B
r
i
e
f
c
a
s
e
,


 
 
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
 
t
y
p
e
 
{


 
 
F
u
n
d
i
n
g
S
i
g
n
a
l
,


 
 
F
u
n
d
i
n
g
S
i
g
n
a
l
L
i
s
t
R
e
s
p
o
n
s
e
,


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
 
q
u
e
r
y
S
i
g
n
a
l
s
,
 
t
y
p
e
 
S
i
g
n
a
l
K
i
n
d
 
}
 
f
r
o
m
 
"
.
/
s
i
g
n
a
l
s
-
a
p
i
"
;




c
o
n
s
t
 
K
I
N
D
_
T
A
B
S
:
 
{
 
i
d
:
 
S
i
g
n
a
l
K
i
n
d
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[


 
 
{
 
i
d
:
 
"
a
l
l
"
,
 
l
a
b
e
l
:
 
"
A
l
l
"
 
}
,


 
 
{
 
i
d
:
 
"
f
u
n
d
i
n
g
"
,
 
l
a
b
e
l
:
 
"
F
u
n
d
i
n
g
"
 
}
,


 
 
{
 
i
d
:
 
"
h
i
r
i
n
g
"
,
 
l
a
b
e
l
:
 
"
H
i
r
i
n
g
"
 
}
,


 
 
{
 
i
d
:
 
"
p
r
o
d
u
c
t
_
l
a
u
n
c
h
"
,
 
l
a
b
e
l
:
 
"
P
r
o
d
u
c
t
 
L
a
u
n
c
h
"
 
}
,


]
;




c
o
n
s
t
 
P
A
G
E
_
C
O
P
Y
:
 
R
e
c
o
r
d
<


 
 
S
i
g
n
a
l
K
i
n
d
,


 
 
{
 
s
e
o
T
i
t
l
e
:
 
s
t
r
i
n
g
;
 
k
i
c
k
e
r
:
 
s
t
r
i
n
g
;
 
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
 
s
t
r
i
n
g
 
}


>
 
=
 
{


 
 
a
l
l
:
 
{


 
 
 
 
s
e
o
T
i
t
l
e
:
 
"
C
o
m
p
a
n
y
 
S
i
g
n
a
l
s
"
,


 
 
 
 
k
i
c
k
e
r
:
 
"
d
i
s
c
o
v
e
r
 
/
 
c
o
m
p
a
n
y
 
s
i
g
n
a
l
s
"
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


 
 
 
 
 
 
"
F
u
n
d
i
n
g
 
r
o
u
n
d
s
 
a
n
d
 
f
o
u
n
d
e
r
s
 
p
o
s
t
i
n
g
 
r
o
l
e
s
 
d
i
r
e
c
t
l
y
,
 
b
e
f
o
r
e
 
l
i
s
t
i
n
g
s
 
h
i
t
 
L
i
n
k
e
d
I
n
.
 
S
o
u
r
c
e
d
 
f
r
o
m
 
Y
 
C
o
m
b
i
n
a
t
o
r
,
 
T
e
c
h
C
r
u
n
c
h
 
V
e
n
t
u
r
e
,
 
H
a
c
k
e
r
 
N
e
w
s
,
 
a
n
d
 
m
a
n
u
a
l
 
c
u
r
a
t
i
o
n
.
"
,


 
 
}
,


 
 
f
u
n
d
i
n
g
:
 
{


 
 
 
 
s
e
o
T
i
t
l
e
:
 
"
F
u
n
d
i
n
g
 
S
i
g
n
a
l
s
"
,


 
 
 
 
k
i
c
k
e
r
:
 
"
d
i
s
c
o
v
e
r
 
/
 
f
u
n
d
i
n
g
 
s
i
g
n
a
l
s
"
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


 
 
 
 
 
 
"
S
t
a
r
t
u
p
s
 
t
h
a
t
 
j
u
s
t
 
r
a
i
s
e
d
 
m
o
n
e
y
,
 
o
f
t
e
n
 
h
i
r
i
n
g
 
n
e
x
t
.
 
S
o
u
r
c
e
d
 
f
r
o
m
 
Y
 
C
o
m
b
i
n
a
t
o
r
,
 
T
e
c
h
C
r
u
n
c
h
 
V
e
n
t
u
r
e
,
 
E
x
a
 
F
u
n
d
i
n
g
,
 
a
n
d
 
m
a
n
u
a
l
 
c
u
r
a
t
i
o
n
.
"
,


 
 
}
,


 
 
h
i
r
i
n
g
:
 
{


 
 
 
 
s
e
o
T
i
t
l
e
:
 
"
H
i
r
i
n
g
 
S
i
g
n
a
l
s
"
,


 
 
 
 
k
i
c
k
e
r
:
 
"
d
i
s
c
o
v
e
r
 
/
 
h
i
r
i
n
g
 
s
i
g
n
a
l
s
"
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


 
 
 
 
 
 
"
F
o
u
n
d
e
r
s
 
a
n
d
 
t
e
a
m
s
 
p
o
s
t
i
n
g
 
o
p
e
n
 
r
o
l
e
s
 
d
i
r
e
c
t
l
y
,
 
e
s
p
e
c
i
a
l
l
y
 
f
r
o
m
 
H
a
c
k
e
r
 
N
e
w
s
 
W
h
o
 
i
s
 
H
i
r
i
n
g
 
a
n
d
 
Y
C
 
l
a
u
n
c
h
e
s
.
"
,


 
 
}
,


 
 
p
r
o
d
u
c
t
_
l
a
u
n
c
h
:
 
{


 
 
 
 
s
e
o
T
i
t
l
e
:
 
"
P
r
o
d
u
c
t
 
L
a
u
n
c
h
 
S
i
g
n
a
l
s
"
,


 
 
 
 
k
i
c
k
e
r
:
 
"
d
i
s
c
o
v
e
r
 
/
 
p
r
o
d
u
c
t
 
l
a
u
n
c
h
e
s
"
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


 
 
 
 
 
 
"
N
e
w
 
p
r
o
d
u
c
t
s
 
a
n
d
 
Y
C
 
l
a
u
n
c
h
e
s
 
h
i
t
t
i
n
g
 
t
h
e
 
m
a
r
k
e
t
 
—
 
c
o
m
p
a
n
i
e
s
 
b
u
i
l
d
i
n
g
 
i
n
 
p
u
b
l
i
c
 
b
e
f
o
r
e
 
t
h
e
y
 
m
a
k
e
 
t
h
e
 
n
e
w
s
.
"
,


 
 
}
,


}
;




f
u
n
c
t
i
o
n
 
t
i
m
e
A
g
o
(
i
s
o
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
c
o
n
s
t
 
d
i
f
f
M
s
 
=
 
D
a
t
e
.
n
o
w
(
)
 
-
 
n
e
w
 
D
a
t
e
(
i
s
o
)
.
g
e
t
T
i
m
e
(
)
;


 
 
c
o
n
s
t
 
h
o
u
r
s
 
=
 
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
d
i
f
f
M
s
 
/
 
3
_
6
0
0
_
0
0
0
)
;


 
 
i
f
 
(
h
o
u
r
s
 
<
 
1
)
 
r
e
t
u
r
n
 
"
j
u
s
t
 
n
o
w
"
;


 
 
i
f
 
(
h
o
u
r
s
 
<
 
2
4
)
 
r
e
t
u
r
n
 
`
$
{
S
t
r
i
n
g
(
h
o
u
r
s
)
}
h
 
a
g
o
`
;


 
 
c
o
n
s
t
 
d
a
y
s
 
=
 
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
h
o
u
r
s
 
/
 
2
4
)
;


 
 
i
f
 
(
d
a
y
s
 
<
 
3
0
)
 
r
e
t
u
r
n
 
`
$
{
S
t
r
i
n
g
(
d
a
y
s
)
}
d
 
a
g
o
`
;


 
 
c
o
n
s
t
 
m
o
n
t
h
s
 
=
 
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
d
a
y
s
 
/
 
3
0
)
;


 
 
r
e
t
u
r
n
 
`
$
{
S
t
r
i
n
g
(
m
o
n
t
h
s
)
}
m
o
 
a
g
o
`
;


}




f
u
n
c
t
i
o
n
 
K
i
c
k
e
r
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
.
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
 
g
a
p
-
2
 
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
.
5
 
w
-
1
.
5
 
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
 
S
i
g
n
a
l
s
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
 
[
k
i
n
d
,
 
s
e
t
K
i
n
d
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
S
i
g
n
a
l
K
i
n
d
>
(
"
a
l
l
"
)
;


 
 
c
o
n
s
t
 
[
s
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
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
(
"
"
)
;


 
 
c
o
n
s
t
 
[
s
e
a
r
c
h
I
n
p
u
t
,
 
s
e
t
S
e
a
r
c
h
I
n
p
u
t
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
(
"
"
)
;


 
 
c
o
n
s
t
 
[
s
o
u
r
c
e
,
 
s
e
t
S
o
u
r
c
e
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
(
"
"
)
;


 
 
c
o
n
s
t
 
[
s
o
r
t
,
 
s
e
t
S
o
r
t
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
"
r
e
c
e
n
t
"
 
|
 
"
a
m
o
u
n
t
"
>
(
"
r
e
c
e
n
t
"
)
;


 
 
c
o
n
s
t
 
[
p
a
g
e
,
 
s
e
t
P
a
g
e
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
(
1
)
;




 
 
c
o
n
s
t
 
c
o
p
y
 
=
 
P
A
G
E
_
C
O
P
Y
[
k
i
n
d
]
;


 
 
c
o
n
s
t
 
s
h
o
w
A
m
o
u
n
t
S
o
r
t
 
=
 
k
i
n
d
 
!
=
=
 
"
h
i
r
i
n
g
"
 
&
&
 
k
i
n
d
 
!
=
=
 
"
p
r
o
d
u
c
t
_
l
a
u
n
c
h
"
;




 
 
c
o
n
s
t
 
q
u
e
r
y
P
a
r
a
m
s
 
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


 
 
 
 
c
o
n
s
t
 
p
a
r
a
m
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
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
b
o
o
l
e
a
n
>
 
=
 
{


 
 
 
 
 
 
p
a
g
e
,


 
 
 
 
 
 
l
i
m
i
t
:
 
1
2
,


 
 
 
 
 
 
s
o
r
t
,


 
 
 
 
 
 
k
i
n
d
,


 
 
 
 
}
;


 
 
 
 
i
f
 
(
s
e
a
r
c
h
)
 
p
a
r
a
m
s
[
"
s
e
a
r
c
h
"
]
 
=
 
s
e
a
r
c
h
;


 
 
 
 
i
f
 
(
s
o
u
r
c
e
)
 
p
a
r
a
m
s
[
"
s
o
u
r
c
e
"
]
 
=
 
s
o
u
r
c
e
;


 
 
 
 
r
e
t
u
r
n
 
p
a
r
a
m
s
;


 
 
}
,
 
[
p
a
g
e
,
 
s
e
a
r
c
h
,
 
s
o
u
r
c
e
,
 
s
o
r
t
,
 
k
i
n
d
]
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
,
 
r
e
f
e
t
c
h
 
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
F
u
n
d
i
n
g
S
i
g
n
a
l
L
i
s
t
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
s
i
g
n
a
l
s
.
l
i
s
t
(
q
u
e
r
y
P
a
r
a
m
s
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


 
 
 
 
 
 
q
u
e
r
y
S
i
g
n
a
l
s
(
{


 
 
 
 
 
 
 
 
p
a
g
e
,


 
 
 
 
 
 
 
 
l
i
m
i
t
:
 
1
2
,


 
 
 
 
 
 
 
 
s
o
r
t
,


 
 
 
 
 
 
 
 
k
i
n
d
,


 
 
 
 
 
 
 
 
s
e
a
r
c
h
:
 
s
e
a
r
c
h
 
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
,


 
 
 
 
 
 
 
 
s
o
u
r
c
e
:
 
s
o
u
r
c
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
,


 
 
 
 
 
 
}
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
 
s
i
g
n
a
l
s
 
=
 
d
a
t
a
?
.
s
i
g
n
a
l
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
t
o
t
a
l
P
a
g
e
s
 
=
 
d
a
t
a
?
.
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
 
?
?
 
1
;


 
 
c
o
n
s
t
 
h
a
s
A
c
t
i
v
e
F
i
l
t
e
r
s
 
=
 
B
o
o
l
e
a
n
(
s
e
a
r
c
h
 
|
|
 
s
o
u
r
c
e
)
;




 
 
c
o
n
s
t
 
s
u
b
m
i
t
S
e
a
r
c
h
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
a
r
c
h
(
s
e
a
r
c
h
I
n
p
u
t
.
t
r
i
m
(
)
)
;


 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
}
;




 
 
c
o
n
s
t
 
c
l
e
a
r
F
i
l
t
e
r
s
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
a
r
c
h
(
"
"
)
;


 
 
 
 
s
e
t
S
e
a
r
c
h
I
n
p
u
t
(
"
"
)
;


 
 
 
 
s
e
t
S
o
u
r
c
e
(
"
"
)
;


 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
}
;




 
 
c
o
n
s
t
 
c
h
a
n
g
e
K
i
n
d
 
=
 
(
n
e
x
t
:
 
S
i
g
n
a
l
K
i
n
d
)
 
=
>
 
{


 
 
 
 
s
e
t
K
i
n
d
(
n
e
x
t
)
;


 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
 
 
i
f
 
(
(
n
e
x
t
 
=
=
=
 
"
h
i
r
i
n
g
"
 
|
|
 
n
e
x
t
 
=
=
=
 
"
p
r
o
d
u
c
t
_
l
a
u
n
c
h
"
)
 
&
&
 
s
o
r
t
 
=
=
=
 
"
a
m
o
u
n
t
"
)
 
{


 
 
 
 
 
 
s
e
t
S
o
r
t
(
"
r
e
c
e
n
t
"
)
;


 
 
 
 
}


 
 
}
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


 
 
 
 
 
 
/
/
 
F
I
X
:
 
A
d
d
e
d
 
m
a
x
-
w
-
6
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
4
 
s
m
:
p
x
-
8
 
t
o
 
a
l
i
g
n
 
w
i
t
h
 
t
h
e
 
r
e
s
t
 
o
f
 
t
h
e
 
s
i
t
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
m
a
x
-
w
-
6
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
4
 
s
m
:
p
x
-
8
 
p
y
-
8
 
p
b
-
1
6
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
{
c
o
p
y
.
s
e
o
T
i
t
l
e
}
 
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
m
b
-
1
0
"
>


 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
{
c
o
p
y
.
k
i
c
k
e
r
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
m
t
-
4
 
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
5
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
{
k
i
n
d
 
=
=
=
 
"
h
i
r
i
n
g
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
i
n
d
 
r
o
l
e
s
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
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
b
e
f
o
r
e
 
t
h
e
 
c
r
o
w
d
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
a
l
e
X
:
 
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
 
s
c
a
l
e
X
:
 
1
 
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
7
,
 
d
e
l
a
y
:
 
0
.
4
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
 
b
o
t
t
o
m
-
0
.
5
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
2
.
5
 
s
m
:
h
-
3
 
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
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
k
i
n
d
 
=
=
=
 
"
p
r
o
d
u
c
t
_
l
a
u
n
c
h
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
u
i
l
t
 
b
y
 
f
o
u
n
d
e
r
s
,
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
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
s
h
i
p
p
e
d
 
t
o
d
a
y
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
a
l
e
X
:
 
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
 
s
c
a
l
e
X
:
 
1
 
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
7
,
 
d
e
l
a
y
:
 
0
.
4
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
 
b
o
t
t
o
m
-
0
.
5
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
2
.
5
 
s
m
:
h
-
3
 
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
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
t
c
h
 
c
o
m
p
a
n
i
e
s
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
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
e
a
r
l
y
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
a
l
e
X
:
 
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
 
s
c
a
l
e
X
:
 
1
 
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
7
,
 
d
e
l
a
y
:
 
0
.
4
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
 
b
o
t
t
o
m
-
0
.
5
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
2
.
5
 
s
m
:
h
-
3
 
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
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
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
m
t
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
5
0
0
 
m
a
x
-
w
-
l
g
"
>
{
c
o
p
y
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
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
K
i
n
d
 
t
a
b
s
 
*
/
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
e
l
a
y
:
 
0
.
0
5
 
}
}


 
 
 
 
 
 
 
 
r
o
l
e
=
"
t
a
b
l
i
s
t
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
=
"
S
i
g
n
a
l
 
t
y
p
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
2
 
m
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
K
I
N
D
_
T
A
B
S
.
m
a
p
(
(
t
a
b
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
k
i
n
d
 
=
=
=
 
t
a
b
.
i
d
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
a
b
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
t
a
b
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
s
e
l
e
c
t
e
d
=
{
a
c
t
i
v
e
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
 
c
h
a
n
g
e
K
i
n
d
(
t
a
b
.
i
d
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
{
`
p
x
-
4
 
p
y
-
2
 
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
 
b
o
r
d
e
r
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
a
b
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
S
e
a
r
c
h
 
+
 
f
i
l
t
e
r
s
 
*
/
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
3
 
m
b
-
8
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
 
1
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
e
l
a
y
:
 
0
.
1
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
 
r
e
l
a
t
i
v
e
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
s
i
g
n
a
l
s
-
s
e
a
r
c
h
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
r
-
o
n
l
y
"
>


 
 
 
 
 
 
 
 
 
 
 
 
S
e
a
r
c
h
 
s
i
g
n
a
l
s


 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
3
 
t
o
p
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
s
i
g
n
a
l
s
-
s
e
a
r
c
h
"


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
s
e
a
r
c
h
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
a
r
c
h
I
n
p
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
e
a
r
c
h
I
n
p
u
t
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
(
e
)
 
=
>
 
e
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"
 
&
&
 
s
u
b
m
i
t
S
e
a
r
c
h
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
e
a
r
c
h
 
b
y
 
c
o
m
p
a
n
y
 
o
r
 
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
.
.
.
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
w
-
f
u
l
l
 
p
l
-
1
0
 
p
r
-
4
 
p
y
-
2
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
w
h
i
t
e
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
m
d
 
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
 
p
l
a
c
e
h
o
l
d
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
4
0
0
 
f
o
c
u
s
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
f
o
c
u
s
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


 
 
 
 
 
 
 
 
 
 
/
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
 
1
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


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
s
i
g
n
a
l
s
-
s
o
u
r
c
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
r
-
o
n
l
y
"
>


 
 
 
 
 
 
 
 
 
 
 
 
F
i
l
t
e
r
 
b
y
 
s
o
u
r
c
e


 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
s
i
g
n
a
l
s
-
s
o
u
r
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
o
u
r
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
o
u
r
c
e
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
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
x
-
3
 
p
y
-
2
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
w
h
i
t
e
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
m
d
 
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
 
f
o
c
u
s
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
o
p
t
i
o
n
 
v
a
l
u
e
=
"
"
>
A
l
l
 
s
o
u
r
c
e
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
y
c
-
l
a
u
n
c
h
e
s
"
>
Y
C
 
L
a
u
n
c
h
e
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
t
e
c
h
c
r
u
n
c
h
"
>
T
e
c
h
C
r
u
n
c
h
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
h
n
-
h
i
r
i
n
g
"
>
H
N
 
H
i
r
i
n
g
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
e
x
a
-
f
u
n
d
i
n
g
"
>
E
x
a
 
F
u
n
d
i
n
g
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
m
a
n
u
a
l
"
>
M
a
n
u
a
l
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
 
1
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
e
l
a
y
:
 
0
.
2
5
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
s
i
g
n
a
l
s
-
s
o
r
t
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
r
-
o
n
l
y
"
>


 
 
 
 
 
 
 
 
 
 
 
 
S
o
r
t
 
s
i
g
n
a
l
s


 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
s
i
g
n
a
l
s
-
s
o
r
t
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
o
r
t
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
o
r
t
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
a
s
 
"
r
e
c
e
n
t
"
 
|
 
"
a
m
o
u
n
t
"
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
p
x
-
3
 
p
y
-
2
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
w
h
i
t
e
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
m
d
 
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
 
f
o
c
u
s
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
o
p
t
i
o
n
 
v
a
l
u
e
=
"
r
e
c
e
n
t
"
>
M
o
s
t
 
r
e
c
e
n
t
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
A
m
o
u
n
t
S
o
r
t
 
?
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
a
m
o
u
n
t
"
>
L
a
r
g
e
s
t
 
r
a
i
s
e
<
/
o
p
t
i
o
n
>
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
 
1
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
e
l
a
y
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
B
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
 
o
n
C
l
i
c
k
=
{
s
u
b
m
i
t
S
e
a
r
c
h
}
 
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


 
 
 
 
 
 
 
 
 
 
 
 
S
e
a
r
c
h


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
R
e
s
u
l
t
s
 
*
/
}


 
 
 
 
 
 
{
i
s
L
o
a
d
i
n
g
 
?
 
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
2
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
6
 
}
)
.
m
a
p
(
(
_
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
h
-
4
4
 
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
w
h
i
t
e
/
1
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"


 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
 
 
)
 
:
 
i
s
E
r
r
o
r
 
?
 
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
y
-
1
6
 
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
r
e
d
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
r
e
d
-
9
0
0
/
4
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
 
1
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
 
m
x
-
a
u
t
o
 
b
g
-
r
e
d
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
r
e
d
-
9
5
0
/
4
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
r
e
d
-
9
0
0
/
4
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
"


 
 
 
 
 
 
 
 
 
 
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
7
 
h
-
7
 
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
s
e
m
i
b
o
l
d
 
m
b
-
1
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
 
s
i
g
n
a
l
s


 
 
 
 
 
 
 
 
 
 
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
t
o
n
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
s
m
 
m
a
x
-
w
-
x
s
 
m
x
-
a
u
t
o
 
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
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
S
o
m
e
t
h
i
n
g
 
w
e
n
t
 
w
r
o
n
g
 
w
h
i
l
e
 
f
e
t
c
h
i
n
g
 
t
h
e
 
f
e
e
d
.
 
P
l
e
a
s
e
 
t
r
y
 
a
g
a
i
n
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
 
v
o
i
d
 
r
e
f
e
t
c
h
(
)
}
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


 
 
 
 
 
 
)
 
:
 
s
i
g
n
a
l
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
 
p
y
-
1
6
 
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
w
h
i
t
e
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
m
d
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
6
 
h
-
1
6
 
m
x
-
a
u
t
o
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
a
d
a
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
w
-
7
 
h
-
7
 
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
s
e
m
i
b
o
l
d
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
s
i
g
n
a
l
s
 
m
a
t
c
h
 
y
o
u
r
 
f
i
l
t
e
r
s


 
 
 
 
 
 
 
 
 
 
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
t
o
n
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
s
m
 
m
a
x
-
w
-
x
s
 
m
x
-
a
u
t
o
 
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
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
s
A
c
t
i
v
e
F
i
l
t
e
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
T
r
y
 
c
l
e
a
r
i
n
g
 
f
i
l
t
e
r
s
 
o
r
 
s
w
i
t
c
h
i
n
g
 
t
h
e
 
s
i
g
n
a
l
 
t
y
p
e
 
t
a
b
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
C
h
e
c
k
 
b
a
c
k
 
a
f
t
e
r
 
t
h
e
 
n
e
x
t
 
i
n
g
e
s
t
 
r
u
n
,
 
u
s
u
a
l
l
y
 
e
v
e
r
y
 
f
e
w
 
h
o
u
r
s
.
"
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
s
A
c
t
i
v
e
F
i
l
t
e
r
s
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
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
 
o
n
C
l
i
c
k
=
{
c
l
e
a
r
F
i
l
t
e
r
s
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
l
e
a
r
 
f
i
l
t
e
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
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
c
o
m
p
a
n
i
e
s
"
>
B
r
o
w
s
e
 
c
o
m
p
a
n
i
e
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
d
i
v
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
2
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
s
.
m
a
p
(
(
s
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
S
i
g
n
a
l
C
a
r
d
 
k
e
y
=
{
s
.
i
d
}
 
s
i
g
n
a
l
=
{
s
}
 
/
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


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
P
a
g
i
n
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
{
!
i
s
L
o
a
d
i
n
g
 
&
&
 
!
i
s
E
r
r
o
r
 
&
&
 
t
o
t
a
l
P
a
g
e
s
 
>
 
1
 
?
 
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
3
 
m
t
-
1
0
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


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
p
a
g
e
 
=
=
=
 
1
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
P
a
g
e
(
(
p
)
 
=
>
 
M
a
t
h
.
m
a
x
(
1
,
 
p
 
-
 
1
)
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
p
x
-
4
 
p
y
-
2
 
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
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
v


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
g
e
}
 
/
 
{
t
o
t
a
l
P
a
g
e
s
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
p
a
g
e
 
>
=
 
t
o
t
a
l
P
a
g
e
s
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
P
a
g
e
(
(
p
)
 
=
>
 
p
 
+
 
1
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
p
x
-
4
 
p
y
-
2
 
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
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t


 
 
 
 
 
 
 
 
 
 
<
/
b
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


 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
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
i
g
n
a
l
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


 
 
s
i
g
n
a
l
:
 
F
u
n
d
i
n
g
S
i
g
n
a
l
;


}




c
o
n
s
t
 
S
i
g
n
a
l
C
a
r
d
 
=
 
(
{
 
s
i
g
n
a
l
 
}
:
 
S
i
g
n
a
l
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
 
=
>
 
{


 
 
c
o
n
s
t
 
i
n
i
t
i
a
l
 
=
 
s
i
g
n
a
l
.
c
o
m
p
a
n
y
N
a
m
e
.
t
r
i
m
(
)
.
c
h
a
r
A
t
(
0
)
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
 
|
|
 
"
?
"
;


 
 
c
o
n
s
t
 
s
h
o
w
H
i
r
i
n
g
B
a
d
g
e
 
=


 
 
 
 
s
i
g
n
a
l
.
h
i
r
i
n
g
S
i
g
n
a
l
 
&
&
 
!
s
i
g
n
a
l
.
f
u
n
d
i
n
g
A
m
o
u
n
t
 
&
&
 
!
s
i
g
n
a
l
.
f
u
n
d
i
n
g
R
o
u
n
d
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
 
p
-
5
 
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
`
/
s
t
u
d
e
n
t
/
s
i
g
n
a
l
s
/
$
{
S
t
r
i
n
g
(
s
i
g
n
a
l
.
i
d
)
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
=
{
`
V
i
e
w
 
$
{
s
i
g
n
a
l
.
c
o
m
p
a
n
y
N
a
m
e
}
 
d
e
t
a
i
l
s
`
}


 
 
 
 
 
 
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
 
m
b
-
3
 
r
e
l
a
t
i
v
e
 
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
 
g
a
p
-
3
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
l
o
g
o
U
r
l
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
{
s
i
g
n
a
l
.
l
o
g
o
U
r
l
}
 
a
l
t
=
"
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
w
-
f
u
l
l
 
h
-
f
u
l
l
 
o
b
j
e
c
t
-
c
o
v
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l


 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
r
u
n
c
a
t
e
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
c
o
m
p
a
n
y
N
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
 
g
a
p
-
1
.
5
 
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
 
m
t
-
0
.
5
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
3
 
h
-
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
i
m
e
A
g
o
(
s
i
g
n
a
l
.
a
n
n
o
u
n
c
e
d
A
t
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
a


 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
s
i
g
n
a
l
.
s
o
u
r
c
e
U
r
l
}


 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
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
e
)
 
=
>
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
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
r
e
l
a
t
i
v
e
 
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
a
u
t
o
 
p
-
1
 
-
m
-
1
 
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
"


 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
O
p
e
n
 
o
r
i
g
i
n
a
l
 
s
o
u
r
c
e
"


 
 
 
 
 
 
 
 
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
 
/
>


 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
s
i
g
n
a
l
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
3
 
m
b
-
4
 
f
l
e
x
-
1
 
r
e
l
a
t
i
v
e
 
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


 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
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
f
l
e
x
-
1
"
 
/
>


 
 
 
 
 
 
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
4
 
g
a
p
-
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
 
r
e
l
a
t
i
v
e
 
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


 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
f
u
n
d
i
n
g
R
o
u
n
d
 
?
 
<
s
p
a
n
>
{
s
i
g
n
a
l
.
f
u
n
d
i
n
g
R
o
u
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
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
f
u
n
d
i
n
g
A
m
o
u
n
t
 
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
l
i
m
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
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
D
o
l
l
a
r
S
i
g
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
 
h
-
3
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
f
u
n
d
i
n
g
A
m
o
u
n
t
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
{
s
h
o
w
H
i
r
i
n
g
B
a
d
g
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
l
i
m
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
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
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


 
 
 
 
 
 
 
 
 
 
 
 
H
i
r
i
n
g


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
h
q
L
o
c
a
t
i
o
n
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
i
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
 
h
-
3
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
h
q
L
o
c
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
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
;
