
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
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
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


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
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
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
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
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
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
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
m
o
d
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
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
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
h
i
g
h
l
i
g
h
t
K
e
y
?
:
 
s
t
r
i
n
g
 
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
 
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
f
i
n
d
M
a
x
(
a
,
 
b
,
 
c
)
:
"
,


 
 
"
 
 
m
a
x
 
←
 
a
"
,


 
 
"
 
 
i
f
 
b
 
>
 
m
a
x
:
"
,


 
 
"
 
 
 
 
m
a
x
 
←
 
b
"
,


 
 
"
 
 
i
f
 
c
 
>
 
m
a
x
:
"
,


 
 
"
 
 
 
 
m
a
x
 
←
 
c
"
,


 
 
"
 
 
r
e
t
u
r
n
 
m
a
x
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
F
r
a
m
e
s
(
a
:
 
n
u
m
b
e
r
,
 
b
:
 
n
u
m
b
e
r
,
 
c
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
:
 
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
,
 
m
e
s
s
a
g
e
:
 
`
I
n
p
u
t
s
 
a
=
$
{
a
}
,
 
b
=
$
{
b
}
,
 
c
=
$
{
c
}
`
 
}
)
;


 
 
l
e
t
 
m
a
x
 
=
 
a
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
m
a
x
"
,
 
m
e
s
s
a
g
e
:
 
`
S
t
a
r
t
:
 
a
s
s
u
m
e
 
m
a
x
 
=
 
a
 
=
 
$
{
a
}
`
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
 
}
,
 
m
e
s
s
a
g
e
:
 
`
C
h
e
c
k
:
 
i
s
 
b
 
(
$
{
b
}
)
 
>
 
m
a
x
 
(
$
{
m
a
x
}
)
?
`
 
}
)
;


 
 
i
f
 
(
b
 
>
 
m
a
x
)
 
{


 
 
 
 
m
a
x
 
=
 
b
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
m
a
x
"
,
 
m
e
s
s
a
g
e
:
 
`
Y
e
s
,
 
u
p
d
a
t
e
 
m
a
x
 
t
o
 
b
 
=
 
$
{
b
}
`
 
}
)
;


 
 
}
 
e
l
s
e
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
 
}
,
 
m
e
s
s
a
g
e
:
 
`
N
o
,
 
k
e
e
p
 
m
a
x
 
=
 
$
{
m
a
x
}
`
 
}
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
 
}
,
 
m
e
s
s
a
g
e
:
 
`
C
h
e
c
k
:
 
i
s
 
c
 
(
$
{
c
}
)
 
>
 
m
a
x
 
(
$
{
m
a
x
}
)
?
`
 
}
)
;


 
 
i
f
 
(
c
 
>
 
m
a
x
)
 
{


 
 
 
 
m
a
x
 
=
 
c
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
m
a
x
"
,
 
m
e
s
s
a
g
e
:
 
`
Y
e
s
,
 
u
p
d
a
t
e
 
m
a
x
 
t
o
 
c
 
=
 
$
{
c
}
`
 
}
)
;


 
 
}
 
e
l
s
e
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
 
}
,
 
m
e
s
s
a
g
e
:
 
`
N
o
,
 
k
e
e
p
 
m
a
x
 
=
 
$
{
m
a
x
}
`
 
}
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
a
,
 
b
,
 
c
,
 
m
a
x
 
}
,
 
m
e
s
s
a
g
e
:
 
`
R
e
t
u
r
n
 
m
a
x
 
=
 
$
{
m
a
x
}
`
 
}
)
;


 
 
r
e
t
u
r
n
 
f
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
 
p
a
r
s
e
T
h
r
e
e
(
s
:
 
s
t
r
i
n
g
)
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
n
u
m
s
 
=
 
s
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
x
)
 
=
>
 
N
u
m
b
e
r
(
x
.
t
r
i
m
(
)
)
)
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
x
)
)
;


 
 
i
f
 
(
n
u
m
s
.
l
e
n
g
t
h
 
!
=
=
 
3
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
[
n
u
m
s
[
0
]
,
 
n
u
m
s
[
1
]
,
 
n
u
m
s
[
2
]
]
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
v
i
s
u
a
l
 
t
r
a
c
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
T
r
a
c
e
r
(
{
 
f
r
a
m
e
,
 
a
,
 
b
,
 
c
 
}
:
 
{
 
f
r
a
m
e
:
 
F
r
a
m
e
;
 
a
:
 
n
u
m
b
e
r
;
 
b
:
 
n
u
m
b
e
r
;
 
c
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
c
o
n
s
t
 
m
a
x
 
=
 
f
r
a
m
e
.
v
a
r
s
.
m
a
x
;


 
 
c
o
n
s
t
 
v
a
l
u
e
s
:
 
{
 
k
e
y
:
 
s
t
r
i
n
g
;
 
v
:
 
n
u
m
b
e
r
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
 
k
e
y
:
 
"
a
"
,
 
v
:
 
a
,
 
l
a
b
e
l
:
 
"
a
"
 
}
,


 
 
 
 
{
 
k
e
y
:
 
"
b
"
,
 
v
:
 
b
,
 
l
a
b
e
l
:
 
"
b
"
 
}
,


 
 
 
 
{
 
k
e
y
:
 
"
c
"
,
 
v
:
 
c
,
 
l
a
b
e
l
:
 
"
c
"
 
}
,


 
 
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
f
l
e
x
 
g
a
p
-
4
 
f
l
e
x
-
w
r
a
p
 
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
"
>


 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
i
t
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
s
M
a
x
 
=
 
m
a
x
 
=
=
=
 
i
t
.
v
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
n
d
 
=
 
(
f
r
a
m
e
.
l
i
n
e
 
=
=
=
 
2
 
&
&
 
i
t
.
k
e
y
 
=
=
=
 
"
b
"
)
 
|
|
 
(
f
r
a
m
e
.
l
i
n
e
 
=
=
=
 
4
 
&
&
 
i
t
.
k
e
y
 
=
=
=
 
"
c
"
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
i
t
.
k
e
y
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
2
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
 
p
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
m
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
c
o
n
d
 
?
 
"
#
F
5
9
E
0
B
"
 
:
 
i
s
M
a
x
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
c
o
n
d
 
?
 
"
#
F
E
F
3
C
7
1
0
"
 
:
 
i
s
M
a
x
 
?
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
1
4
`
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
i
s
M
a
x
 
?
 
`
0
 
0
 
0
 
3
p
x
 
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
2
5
`
 
:
 
"
n
o
n
e
"
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
 
f
o
n
t
-
b
o
l
d
 
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
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
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
3
x
l
 
f
o
n
t
-
e
x
t
r
a
b
o
l
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
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
 
i
s
M
a
x
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
D
a
r
k
 
:
 
T
H
E
M
E
.
t
e
x
t
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
.
v
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


 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
 
m
a
x


 
 
 
 
 
 
 
 
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
m
i
n
-
w
-
2
0
 
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
c
e
n
t
e
r
 
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
x
l
 
f
o
n
t
-
e
x
t
r
a
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
"


 
 
 
 
 
 
 
 
 
 
s
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
:
 
m
a
x
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
 
=
=
=
 
"
m
a
x
"
 
?
 
`
0
 
0
 
0
 
3
p
x
 
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
4
0
`
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
m
a
x
 
?
?
 
"
,
"
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
C
a
l
l
o
u
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
f
u
l
l
"
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
}
<
/
C
a
l
l
o
u
t
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
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
7
,
 
1
2
,
 
4
"
)
;


 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
p
a
r
s
e
T
h
r
e
e
(
i
n
p
u
t
S
t
r
)
;


 
 
c
o
n
s
t
 
[
a
,
 
b
,
 
c
]
 
=
 
p
a
r
s
e
d
 
?
?
 
[
7
,
 
1
2
,
 
4
]
;


 
 
c
o
n
s
t
 
f
r
a
m
e
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
 
b
u
i
l
d
F
r
a
m
e
s
(
a
,
 
b
,
 
c
)
,
 
[
a
,
 
b
,
 
c
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
F
i
n
d
 
M
a
x
 
o
f
 
T
h
r
e
e
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
I
n
p
u
t
s
 
(
t
h
r
e
e
 
n
u
m
b
e
r
s
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
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
e
.
g
.
 
7
,
 
1
2
,
 
4
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
C
o
m
m
a
 
o
r
 
s
p
a
c
e
 
s
e
p
a
r
a
t
e
d
.
 
E
x
a
c
t
l
y
 
t
h
r
e
e
 
n
u
m
b
e
r
s
.
"


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
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
A
s
c
e
n
d
i
n
g
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
"
 
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
D
e
s
c
e
n
d
i
n
g
"
,
 
v
a
l
u
e
:
 
"
9
,
 
5
,
 
1
"
 
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
M
i
d
d
l
e
 
w
i
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
 
"
3
,
 
8
,
 
2
"
 
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
A
l
l
 
e
q
u
a
l
"
,
 
v
a
l
u
e
:
 
"
5
,
 
5
,
 
5
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
T
h
r
e
e
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
=
{
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
 
r
 
=
 
(
)
 
=
>
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
2
0
)
 
-
 
5
;


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
`
$
{
r
(
)
}
,
 
$
{
r
(
)
}
,
 
$
{
r
(
)
}
`
)
;


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
V
i
s
u
a
l
T
r
a
c
e
r
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
a
=
{
a
}
 
b
=
{
b
}
 
c
=
{
c
}
 
/
>
}


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
W
h
a
t
 
i
s
 
a
n
 
a
l
g
o
r
i
t
h
m
?
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
A
 
f
i
n
i
t
e
,
 
s
t
e
p
-
b
y
-
s
t
e
p
 
p
r
o
c
e
d
u
r
e
 
t
h
a
t
 
t
a
k
e
s
 
s
o
m
e
 
i
n
p
u
t
 
a
n
d
 
p
r
o
d
u
c
e
s
 
a
 
c
o
r
r
e
c
t
 
o
u
t
p
u
t
.
 
T
h
i
n
k
 
o
f
 
i
t
 
a
s
 
a
n
 
u
n
a
m
b
i
g
u
o
u
s
 
r
e
c
i
p
e
 
a
 
c
o
m
p
u
t
e
r
 
c
a
n
 
f
o
l
l
o
w
 
w
i
t
h
o
u
t
 
c
r
e
a
t
i
v
i
t
y
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
A
l
g
o
r
i
t
h
m
 
v
s
 
P
r
o
g
r
a
m
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
A
n
 
a
l
g
o
r
i
t
h
m
 
i
s
 
l
a
n
g
u
a
g
e
-
a
g
n
o
s
t
i
c
,
 
p
s
e
u
d
o
c
o
d
e
 
o
r
 
E
n
g
l
i
s
h
 
i
s
 
e
n
o
u
g
h
.
 
A
 
p
r
o
g
r
a
m
 
i
s
 
a
n
 
a
l
g
o
r
i
t
h
m
 
w
r
i
t
t
e
n
 
i
n
 
a
 
s
p
e
c
i
f
i
c
 
l
a
n
g
u
a
g
e
 
(
P
y
t
h
o
n
,
 
C
+
+
,
 
J
a
v
a
)
.
 
T
h
e
 
s
a
m
e
 
a
l
g
o
r
i
t
h
m
 
c
a
n
 
b
e
 
w
r
i
t
t
e
n
 
a
s
 
m
a
n
y
 
d
i
f
f
e
r
e
n
t
 
p
r
o
g
r
a
m
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
F
o
u
r
 
e
s
s
e
n
t
i
a
l
 
p
r
o
p
e
r
t
i
e
s
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
(
1
)
 
I
n
p
u
t
,
 
z
e
r
o
 
o
r
 
m
o
r
e
 
w
e
l
l
-
d
e
f
i
n
e
d
 
i
n
p
u
t
s
.
 
(
2
)
 
O
u
t
p
u
t
,
 
a
t
 
l
e
a
s
t
 
o
n
e
.
 
(
3
)
 
D
e
f
i
n
i
t
e
n
e
s
s
,
 
e
a
c
h
 
s
t
e
p
 
i
s
 
u
n
a
m
b
i
g
u
o
u
s
.
 
(
4
)
 
F
i
n
i
t
e
n
e
s
s
,
 
i
t
 
t
e
r
m
i
n
a
t
e
s
.
 
A
d
d
 
c
o
r
r
e
c
t
n
e
s
s
 
a
n
d
 
y
o
u
 
h
a
v
e
 
t
h
e
 
f
i
v
e
 
c
l
a
s
s
i
c
a
l
 
c
r
i
t
e
r
i
a
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
H
o
w
 
w
e
 
t
r
a
c
e
 
a
n
 
a
l
g
o
r
i
t
h
m
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
T
r
a
c
i
n
g
 
m
e
a
n
s
 
w
a
l
k
i
n
g
 
t
h
r
o
u
g
h
 
e
a
c
h
 
i
n
s
t
r
u
c
t
i
o
n
 
a
n
d
 
t
r
a
c
k
i
n
g
 
w
h
a
t
 
e
v
e
r
y
 
v
a
r
i
a
b
l
e
 
h
o
l
d
s
 
a
t
 
e
v
e
r
y
 
s
t
e
p
.
 
I
n
t
e
r
v
i
e
w
e
r
s
 
a
s
k
 
y
o
u
 
t
o
 
t
r
a
c
e
 
b
e
c
a
u
s
e
 
i
t
 
p
r
o
v
e
s
 
y
o
u
 
u
n
d
e
r
s
t
a
n
d
,
 
n
o
t
 
j
u
s
t
 
m
e
m
o
r
i
z
e
,
 
t
h
e
 
l
o
g
i
c
.
"
,


 
 
 
 
}
,


 
 
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
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
m
e
n
t
a
l
 
m
o
d
e
l
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
R
e
a
d
 
l
i
k
e
 
a
 
C
P
U
.
 
T
r
a
c
k
 
e
v
e
r
y
 
v
a
r
i
a
b
l
e
.
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
B
e
f
o
r
e
 
y
o
u
 
l
e
a
r
n
 
a
n
y
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
 
o
r
 
p
a
t
t
e
r
n
,
 
y
o
u
 
n
e
e
d
 
o
n
e
 
h
a
b
i
t
:
 
r
e
a
d
 
a
 
p
r
o
c
e
d
u
r
e
,


 
 
 
 
 
 
 
 
 
 
p
r
e
t
e
n
d
 
y
o
u
 
a
r
e
 
t
h
e
 
C
P
U
,
 
a
n
d
 
t
r
a
c
k
 
e
v
e
r
y
 
v
a
r
i
a
b
l
e
 
i
n
 
a
 
t
a
b
l
e
.
 
E
v
e
r
y
 
i
n
t
e
r
v
i
e
w
 
p
r
o
b
l
e
m


 
 
 
 
 
 
 
 
 
 
s
t
a
r
t
s
 
h
e
r
e
.


 
 
 
 
 
 
 
 
<
/
L
e
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
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
P
s
e
u
d
o
c
o
d
e
,
 
t
h
e
 
l
a
n
g
u
a
g
e
 
o
f
 
a
l
g
o
r
i
t
h
m
 
t
r
a
c
i
n
g
<
/
S
u
b
H
e
a
d
i
n
g
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


 
 
 
 
 
 
 
 
 
 
P
s
e
u
d
o
c
o
d
e
 
i
s
 
p
l
a
i
n
 
E
n
g
l
i
s
h
 
t
h
a
t
 
r
e
a
d
s
 
l
i
k
e
 
c
o
d
e
,
 
w
i
t
h
o
u
t
 
c
o
m
m
i
t
t
i
n
g
 
t
o
 
a


 
 
 
 
 
 
 
 
 
 
s
p
e
c
i
f
i
c
 
p
r
o
g
r
a
m
m
i
n
g
 
l
a
n
g
u
a
g
e
.
 
I
t
 
h
i
d
e
s
 
s
y
n
t
a
x
 
n
o
i
s
e
 
(
s
e
m
i
c
o
l
o
n
s
,
 
t
y
p
e


 
 
 
 
 
 
 
 
 
 
d
e
c
l
a
r
a
t
i
o
n
s
)
 
s
o
 
t
h
e
 
s
t
r
u
c
t
u
r
e
 
o
f
 
t
h
e
 
a
l
g
o
r
i
t
h
m
 
i
s
 
t
h
e
 
o
n
l
y
 
t
h
i
n
g
 
o
n
 
t
h
e


 
 
 
 
 
 
 
 
 
 
p
a
g
e
.
 
T
h
r
o
u
g
h
o
u
t
 
t
h
i
s
 
c
u
r
r
i
c
u
l
u
m
,
 
p
s
e
u
d
o
c
o
d
e
 
i
s
 
w
h
a
t
 
y
o
u
 
t
r
a
c
e
,
 
w
h
a
t
 
y
o
u


 
 
 
 
 
 
 
 
 
 
r
e
a
s
o
n
 
a
b
o
u
t
,
 
a
n
d
 
w
h
a
t
 
g
e
t
s
 
t
r
a
n
s
l
a
t
e
d
 
i
n
t
o
 
y
o
u
r
 
r
e
a
l
 
l
a
n
g
u
a
g
e
 
o
f
 
c
h
o
i
c
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
b
-
2
 
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
 
u
p
p
e
r
c
a
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
{
s
.
t
i
t
l
e
}
<
/
S
u
b
H
e
a
d
i
n
g
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
s
.
b
o
d
y
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




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
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
i
n
p
u
t
s
:
 
"
2
,
 
9
,
 
5
"
,
 
a
n
s
w
e
r
:
 
9
 
}
,


 
 
 
 
{
 
i
n
p
u
t
s
:
 
"
-
3
,
 
-
7
,
 
-
1
"
,
 
a
n
s
w
e
r
:
 
-
1
 
}
,


 
 
 
 
{
 
i
n
p
u
t
s
:
 
"
4
,
 
4
,
 
4
"
,
 
a
n
s
w
e
r
:
 
4
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
s
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
(
s
t
r
i
n
g
 
|
 
n
u
l
l
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
n
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
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
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
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
T
r
a
c
e
 
e
a
c
h
 
c
a
l
l
 
t
o
 
<
I
n
l
i
n
e
C
o
d
e
>
f
i
n
d
M
a
x
<
/
I
n
l
i
n
e
C
o
d
e
>
 
o
n
 
p
a
p
e
r
.
 
W
r
i
t
e
 
y
o
u
r
 
p
r
e
d
i
c
t
e
d
 
r
e
t
u
r
n


 
 
 
 
 
 
 
 
v
a
l
u
e
,
 
t
h
e
n
 
r
e
v
e
a
l
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>




 
 
 
 
 
 
{
p
r
o
b
l
e
m
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
g
 
=
 
g
u
e
s
s
e
s
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
 
!
=
=
 
n
u
l
l
 
&
&
 
N
u
m
b
e
r
(
g
)
 
=
=
=
 
p
.
a
n
s
w
e
r
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
a
r
d
 
k
e
y
=
{
i
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
 
g
a
p
-
3
 
f
l
e
x
-
w
r
a
p
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
5
0
0
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
o
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
m
 
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
 
p
x
-
3
 
p
y
-
1
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
n
d
M
a
x
(
{
p
.
i
n
p
u
t
s
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
y
o
u
r
 
g
u
e
s
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
 
?
?
 
"
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
G
u
e
s
s
e
s
(
v
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
w
-
2
4
 
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
3
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
m
 
f
o
n
t
-
m
o
n
o
 
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
w
h
i
t
e
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
n
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
t
r
u
e
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
h
o
w
n
(
v
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
3
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
r
e
v
e
a
l
e
d
 
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
{
`
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
0
0
/
1
0
 
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
l
i
m
e
-
2
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
l
i
m
e
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
r
o
s
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
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
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
r
o
s
e
-
2
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
o
s
e
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
,
 
$
{
p
.
a
n
s
w
e
r
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
n
s
w
e
r
}
`
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
C
a
r
d
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
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
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
y
 
t
h
i
s
 
l
e
s
s
o
n
 
m
a
t
t
e
r
s
 
m
o
r
e
 
t
h
a
n
 
i
t
 
l
o
o
k
s
<
/
S
u
b
H
e
a
d
i
n
g
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


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
h
a
r
d
 
t
o
p
i
c
 
l
a
t
e
r
 
(
r
e
c
u
r
s
i
o
n
,
 
D
P
,
 
g
r
a
p
h
 
a
l
g
o
r
i
t
h
m
s
)
 
b
e
c
o
m
e
s
 
t
r
a
c
t
a
b
l
e
 
o
n
c
e
 
y
o
u


 
 
 
 
 
 
 
 
 
 
r
e
f
l
e
x
i
v
e
l
y
 
t
r
a
c
e
.
 
W
h
e
n
 
y
o
u
 
g
e
t
 
s
t
u
c
k
 
i
n
 
a
n
 
i
n
t
e
r
v
i
e
w
,
 
t
h
e
 
r
e
c
o
v
e
r
y
 
m
o
v
e
 
i
s
:
 
p
i
c
k
 
a
n


 
 
 
 
 
 
 
 
 
 
i
n
p
u
t
,
 
t
r
a
c
e
 
i
t
 
b
y
 
h
a
n
d
,
 
w
r
i
t
e
 
d
o
w
n
 
e
v
e
r
y
 
v
a
r
i
a
b
l
e
.
 
T
h
i
s
 
i
s
 
t
h
e
 
m
o
v
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
t
e
r
v
i
e
w
-
s
t
y
l
e
 
t
r
a
c
e
 
t
e
m
p
l
a
t
e
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
o
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
l
i
s
t
-
d
e
c
i
m
a
l
 
p
l
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
1
.
5
 
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


 
 
 
 
 
 
 
 
 
 
<
l
i
>
L
i
s
t
 
a
l
l
 
v
a
r
i
a
b
l
e
s
 
a
s
 
c
o
l
u
m
n
 
h
e
a
d
e
r
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
N
u
m
b
e
r
 
t
h
e
 
p
s
e
u
d
o
c
o
d
e
 
l
i
n
e
s
;
 
w
r
i
t
e
 
t
h
e
 
l
i
n
e
 
i
n
d
e
x
 
i
n
 
t
h
e
 
f
i
r
s
t
 
c
o
l
u
m
n
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
f
t
e
r
 
e
a
c
h
 
l
i
n
e
 
t
h
a
t
 
c
h
a
n
g
e
s
 
s
t
a
t
e
,
 
a
d
d
 
a
 
n
e
w
 
r
o
w
 
w
i
t
h
 
t
h
e
 
u
p
d
a
t
e
d
 
v
a
l
u
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
T
h
e
 
l
a
s
t
 
r
o
w
'
s
 
o
u
t
p
u
t
 
c
o
l
u
m
n
 
i
s
 
y
o
u
r
 
a
n
s
w
e
r
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
l
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
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
 
L
1
_
A
l
g
o
r
i
t
h
m
T
r
a
c
e
r
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
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
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
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
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
c
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
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
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
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
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
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
o
f
 
t
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
 
i
s
 
N
O
T
 
a
 
r
e
q
u
i
r
e
d
 
p
r
o
p
e
r
t
y
 
o
f
 
a
n
 
a
l
g
o
r
i
t
h
m
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
F
i
n
i
t
e
n
e
s
s
"
,
 
"
D
e
f
i
n
i
t
e
n
e
s
s
"
,
 
"
S
p
e
e
d
 
i
n
 
m
i
l
l
i
s
e
c
o
n
d
s
"
,
 
"
W
e
l
l
-
d
e
f
i
n
e
d
 
i
n
p
u
t
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
A
l
g
o
r
i
t
h
m
s
 
a
r
e
 
d
e
f
i
n
e
d
 
b
y
 
c
o
r
r
e
c
t
n
e
s
s
 
a
n
d
 
t
e
r
m
i
n
a
t
i
o
n
,
 
n
o
t
 
a
 
s
p
e
c
i
f
i
c
 
r
u
n
t
i
m
e
 
m
e
a
s
u
r
e
d
 
i
n
 
m
i
l
l
i
s
e
c
o
n
d
s
.
 
C
o
m
p
l
e
x
i
t
y
 
(
B
i
g
-
O
)
 
i
s
 
a
 
s
e
p
a
r
a
t
e
 
a
n
a
l
y
t
i
c
a
l
 
t
o
o
l
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
d
o
e
s
 
'
t
r
a
c
i
n
g
'
 
a
n
 
a
l
g
o
r
i
t
h
m
 
m
e
a
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
W
r
i
t
i
n
g
 
i
t
 
i
n
 
p
s
e
u
d
o
c
o
d
e
"
,


 
 
 
 
 
 
 
 
"
R
u
n
n
i
n
g
 
t
h
e
 
c
o
d
e
 
o
n
 
a
 
C
P
U
 
a
n
d
 
r
e
a
d
i
n
g
 
t
h
e
 
o
u
t
p
u
t
"
,


 
 
 
 
 
 
 
 
"
W
a
l
k
i
n
g
 
t
h
r
o
u
g
h
 
i
n
s
t
r
u
c
t
i
o
n
s
 
s
t
e
p
-
b
y
-
s
t
e
p
 
a
n
d
 
t
r
a
c
k
i
n
g
 
v
a
r
i
a
b
l
e
 
v
a
l
u
e
s
"
,


 
 
 
 
 
 
 
 
"
P
r
i
n
t
i
n
g
 
e
v
e
r
y
 
l
i
n
e
 
w
i
t
h
 
a
 
l
o
g
g
e
r
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
T
r
a
c
i
n
g
 
i
s
 
s
i
m
u
l
a
t
i
n
g
 
e
x
e
c
u
t
i
o
n
 
b
y
 
h
a
n
d
 
a
n
d
 
r
e
c
o
r
d
i
n
g
 
w
h
a
t
 
e
a
c
h
 
v
a
r
i
a
b
l
e
 
h
o
l
d
s
 
a
f
t
e
r
 
e
a
c
h
 
s
t
e
p
,
 
a
 
s
k
i
l
l
 
i
n
t
e
r
v
i
e
w
e
r
s
 
t
e
s
t
 
d
i
r
e
c
t
l
y
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
r
a
c
e
 
f
i
n
d
M
a
x
(
-
2
,
 
-
9
,
 
-
5
)
.
 
W
h
a
t
 
i
s
 
r
e
t
u
r
n
e
d
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
-
9
"
,
 
"
-
5
"
,
 
"
-
2
"
,
 
"
0
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
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
 
m
a
x
 
=
 
-
2
.
 
I
s
 
-
9
 
>
 
-
2
?
 
N
o
.
 
I
s
 
-
5
 
>
 
-
2
?
 
N
o
.
 
R
e
t
u
r
n
 
-
2
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
f
 
w
e
 
r
e
m
o
v
e
d
 
t
h
e
 
f
i
r
s
t
 
'
i
f
 
b
 
>
 
m
a
x
'
 
c
h
e
c
k
 
e
n
t
i
r
e
l
y
,
 
w
h
e
n
 
w
o
u
l
d
 
f
i
n
d
M
a
x
 
s
t
i
l
l
 
b
e
 
c
o
r
r
e
c
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
A
l
w
a
y
s
"
,
 
"
O
n
l
y
 
w
h
e
n
 
b
 
≤
 
a
"
,
 
"
O
n
l
y
 
w
h
e
n
 
a
 
i
s
 
t
h
e
 
l
a
r
g
e
s
t
"
,
 
"
N
e
v
e
r
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
W
i
t
h
o
u
t
 
t
h
a
t
 
c
h
e
c
k
,
 
b
 
i
s
 
n
e
v
e
r
 
c
o
n
s
i
d
e
r
e
d
.
 
T
h
e
 
f
u
n
c
t
i
o
n
 
r
e
t
u
r
n
s
 
m
a
x
(
a
,
 
c
)
.
 
I
t
 
h
a
p
p
e
n
s
 
t
o
 
b
e
 
c
o
r
r
e
c
t
 
w
h
e
n
 
a
 
i
s
 
a
l
r
e
a
d
y
 
≥
 
b
,
 
i
.
e
.
,
 
b
 
≤
 
a
.
"
,


 
 
 
 
}
,


 
 
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
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
A
l
g
o
r
i
t
h
m
 
T
r
a
c
e
r
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
2
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
F
o
u
n
d
a
t
i
o
n
a
l
 
f
o
r
 
e
v
e
r
y
 
c
o
d
i
n
g
 
i
n
t
e
r
v
i
e
w
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
S
p
a
c
e
 
C
o
m
p
l
e
x
i
t
y
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


