
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
E
f
f
e
c
t
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
 
B
l
o
c
k
s
,
 
P
l
a
y
,
 
P
a
u
s
e
,
 
R
o
t
a
t
e
C
c
w
,
 
S
e
r
v
e
r
,
 
U
s
e
r
s
,
 
G
l
o
b
e
,
 
L
a
y
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
 
E
n
g
i
n
e
e
r
i
n
g
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
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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


 
 
S
D
,


 
 
S
D
_
S
O
F
T
,


 
 
S
D
_
B
O
R
D
E
R
,


 
 
M
O
N
O
,


 
 
s
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


 
 
s
e
c
t
i
o
n
D
e
s
c
,


 
 
s
t
a
g
g
e
r
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


 
 
c
a
r
d
E
n
t
r
a
n
c
e
,


 
 
c
a
r
d
H
o
v
e
r
,


}
 
f
r
o
m
 
"
.
/
_
s
h
a
r
e
d
/
s
t
y
l
e
s
"
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
Z
o
o
m
 
O
u
t
:
 
f
r
o
m
 
f
u
n
c
t
i
o
n
 
t
o
 
f
u
l
l
 
s
y
s
t
e
m
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




/
/
 
P
r
e
c
o
m
p
u
t
e
d
 
r
a
n
d
o
m
 
o
p
a
c
i
t
i
e
s
 
f
o
r
 
t
h
e
 
t
r
a
f
f
i
c
 
b
a
r
 
v
i
s
u
a
l
i
z
a
t
i
o
n
 
(
s
t
a
b
l
e
 
a
c
r
o
s
s
 
r
e
n
d
e
r
s
)


c
o
n
s
t
 
T
R
A
F
F
I
C
_
B
A
R
_
O
P
A
C
I
T
I
E
S
 
=
 
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
0
 
}
,
 
(
)
 
=
>
 
0
.
6
 
+
 
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
 
0
.
4
)
;




c
o
n
s
t
 
Z
O
O
M
_
S
T
A
G
E
S
 
=
 
[


 
 
{


 
 
 
 
k
e
y
:
 
"
f
u
n
c
t
i
o
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
F
u
n
c
t
i
o
n
"
,


 
 
 
 
b
a
d
g
e
:
 
"
D
S
A
"
,


 
 
 
 
b
a
d
g
e
C
o
l
o
r
:
 
"
#
3
b
8
2
f
6
"
,


 
 
 
 
c
a
p
t
i
o
n
:
 
"
O
n
e
 
f
u
n
c
t
i
o
n
.
 
O
n
e
 
i
n
p
u
t
,
 
o
n
e
 
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
s
 
i
s
 
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
.
"
,


 
 
 
 
u
s
e
r
s
:
 
0
,


 
 
}
,


 
 
{


 
 
 
 
k
e
y
:
 
"
c
l
a
s
s
"
,


 
 
 
 
l
a
b
e
l
:
 
"
C
l
a
s
s
"
,


 
 
 
 
b
a
d
g
e
:
 
"
O
O
P
 
/
 
L
L
D
"
,


 
 
 
 
b
a
d
g
e
C
o
l
o
r
:
 
"
#
1
4
b
8
a
6
"
,


 
 
 
 
c
a
p
t
i
o
n
:
 
"
A
 
c
l
a
s
s
 
w
i
t
h
 
m
e
t
h
o
d
s
 
a
n
d
 
s
t
a
t
e
.
 
D
e
s
i
g
n
i
n
g
 
t
h
i
s
 
s
h
a
p
e
 
i
s
 
w
h
a
t
 
L
L
D
 
r
o
u
n
d
s
 
t
e
s
t
.
"
,


 
 
 
 
u
s
e
r
s
:
 
0
,


 
 
}
,


 
 
{


 
 
 
 
k
e
y
:
 
"
s
e
r
v
e
r
"
,


 
 
 
 
l
a
b
e
l
:
 
"
S
i
n
g
l
e
 
S
e
r
v
e
r
"
,


 
 
 
 
b
a
d
g
e
:
 
"
D
e
p
l
o
y
m
e
n
t
"
,


 
 
 
 
b
a
d
g
e
C
o
l
o
r
:
 
"
#
8
b
5
c
f
6
"
,


 
 
 
 
c
a
p
t
i
o
n
:
 
"
O
n
e
 
m
a
c
h
i
n
e
,
 
a
 
f
e
w
 
c
l
a
s
s
e
s
 
i
n
s
i
d
e
.
 
S
t
i
l
l
 
n
o
 
s
y
s
t
e
m
 
d
e
s
i
g
n
 
y
e
t
.
"
,


 
 
 
 
u
s
e
r
s
:
 
1
,


 
 
}
,


 
 
{


 
 
 
 
k
e
y
:
 
"
t
r
a
f
f
i
c
"
,


 
 
 
 
l
a
b
e
l
:
 
"
1
 
M
i
l
l
i
o
n
 
U
s
e
r
s
"
,


 
 
 
 
b
a
d
g
e
:
 
"
B
r
e
a
k
s
"
,


 
 
 
 
b
a
d
g
e
C
o
l
o
r
:
 
"
#
8
4
c
c
1
6
"
,


 
 
 
 
c
a
p
t
i
o
n
:
 
"
O
n
e
 
s
e
r
v
e
r
 
c
a
n
n
o
t
 
r
e
l
i
a
b
l
y
 
s
e
r
v
e
 
a
 
m
i
l
l
i
o
n
 
c
o
n
c
u
r
r
e
n
t
 
u
s
e
r
s
.
 
L
o
a
d
,
 
b
l
a
s
t
 
r
a
d
i
u
s
,
 
a
n
d
 
g
e
o
g
r
a
p
h
y
 
a
l
l
 
b
r
e
a
k
 
i
t
.
"
,


 
 
 
 
u
s
e
r
s
:
 
1
_
0
0
0
_
0
0
0
,


 
 
 
 
b
r
o
k
e
n
:
 
t
r
u
e
,


 
 
}
,


 
 
{


 
 
 
 
k
e
y
:
 
"
s
y
s
t
e
m
"
,


 
 
 
 
l
a
b
e
l
:
 
"
D
i
s
t
r
i
b
u
t
e
d
 
S
y
s
t
e
m
"
,


 
 
 
 
b
a
d
g
e
:
 
"
H
L
D
"
,


 
 
 
 
b
a
d
g
e
C
o
l
o
r
:
 
S
D
,


 
 
 
 
c
a
p
t
i
o
n
:
 
"
L
o
a
d
 
b
a
l
a
n
c
e
r
,
 
r
e
p
l
i
c
a
s
,
 
c
a
c
h
e
,
 
D
B
,
 
q
u
e
u
e
.
 
D
e
s
i
g
n
e
d
 
s
o
 
i
t
 
d
o
e
s
 
n
o
t
 
e
x
p
l
o
d
e
.
 
T
h
i
s
 
i
s
 
S
y
s
t
e
m
 
D
e
s
i
g
n
.
"
,


 
 
 
 
u
s
e
r
s
:
 
1
_
0
0
0
_
0
0
0
,


 
 
}
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
 
Z
o
o
m
O
u
t
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
d
x
,
 
s
e
t
I
d
x
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
0
)
;


 
 
c
o
n
s
t
 
[
p
l
a
y
i
n
g
,
 
s
e
t
P
l
a
y
i
n
g
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
t
r
u
e
)
;




 
 
u
s
e
E
f
f
e
c
t
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
p
l
a
y
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
;


 
 
 
 
c
o
n
s
t
 
t
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
I
d
x
(
(
i
)
 
=
>
 
(
i
 
+
 
1
)
 
%
 
Z
O
O
M
_
S
T
A
G
E
S
.
l
e
n
g
t
h
)
;


 
 
 
 
}
,
 
2
8
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
)
;


 
 
}
,
 
[
p
l
a
y
i
n
g
]
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
g
e
 
=
 
Z
O
O
M
_
S
T
A
G
E
S
[
i
d
x
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
W
h
e
r
e
 
d
o
e
s
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
l
i
v
e
?
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
E
v
e
r
y
 
p
i
e
c
e
 
o
f
 
s
o
f
t
w
a
r
e
 
f
i
t
s
 
s
o
m
e
w
h
e
r
e
 
o
n
 
a
 
l
a
d
d
e
r
 
-
 
f
r
o
m
 
a
 
s
i
n
g
l
e
 
f
u
n
c
t
i
o
n
 
t
o
 
a
 
s
y
s
t
e
m


 
 
 
 
 
 
 
 
s
e
r
v
i
n
g
 
m
i
l
l
i
o
n
s
.
 
W
a
t
c
h
 
t
h
e
 
c
a
m
e
r
a
 
p
u
l
l
 
b
a
c
k
 
s
t
a
g
e
 
b
y
 
s
t
a
g
e
.
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
i
s
 
w
h
a
t
 
h
a
p
p
e
n
s


 
 
 
 
 
 
 
 
w
h
e
n
 
o
n
e
 
m
a
c
h
i
n
e
 
i
s
 
n
o
 
l
o
n
g
e
r
 
e
n
o
u
g
h
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
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
 
"
#
0
b
1
2
2
0
"
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
 
1
2
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
g
e
 
i
n
d
i
c
a
t
o
r
 
r
o
w
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
8
p
x
 
0
"
,
 
g
a
p
:
 
6
,
 
f
l
e
x
W
r
a
p
:
 
"
w
r
a
p
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
Z
O
O
M
_
S
T
A
G
E
S
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
s
.
k
e
y
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
 
{
 
s
e
t
I
d
x
(
i
)
;
 
s
e
t
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
5
p
x
 
1
0
p
x
"
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
 
4
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
i
 
=
=
=
 
i
d
x
 
?
 
s
.
b
a
d
g
e
C
o
l
o
r
 
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
)
"
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
 
i
 
=
=
=
 
i
d
x
 
?
 
`
$
{
s
.
b
a
d
g
e
C
o
l
o
r
}
2
2
`
 
:
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
 
=
=
=
 
i
d
x
 
?
 
s
.
b
a
d
g
e
C
o
l
o
r
 
:
 
"
#
6
4
7
4
8
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
a
l
l
 
0
.
2
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}
 
·
 
{
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
b
u
t
t
o
n
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




 
 
 
 
 
 
 
 
{
/
*
 
M
a
i
n
 
s
t
a
g
e
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
2
0
p
x
 
1
8
p
x
 
1
8
p
x
"
,
 
m
i
n
H
e
i
g
h
t
:
 
3
4
0
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
g
e
A
r
t
 
s
t
a
g
e
=
{
s
t
a
g
e
}
 
i
d
x
=
{
i
d
x
}
 
/
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
 
C
a
p
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
2
0
p
x
"
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
T
o
p
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
2
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
8
p
x
"
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
 
4
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
 
`
$
{
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
2
2
`
,
 
c
o
l
o
r
:
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
5
5
`
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
.
b
a
d
g
e
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
.
c
a
p
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
r
o
l
s
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
8
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
T
o
p
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
2
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
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
 
s
e
t
P
l
a
y
i
n
g
(
(
p
)
 
=
>
 
!
p
)
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
2
p
x
"
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
 
6
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
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
 
"
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
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
6
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
y
i
n
g
 
?
 
<
P
a
u
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
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
y
i
n
g
 
?
 
"
P
a
u
s
e
"
 
:
 
"
P
l
a
y
"
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


 
 
 
 
 
 
 
 
 
 
<
b
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
 
{
 
s
e
t
I
d
x
(
0
)
;
 
s
e
t
P
l
a
y
i
n
g
(
t
r
u
e
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
2
p
x
"
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
 
6
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
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
 
"
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
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
6
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
c
l
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


 
 
 
 
 
 
 
 
 
 
 
 
R
e
p
l
a
y


 
 
 
 
 
 
 
 
 
 
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
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
6
4
7
4
8
b
"
,
 
a
l
i
g
n
S
e
l
f
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
g
e
 
{
i
d
x
 
+
 
1
}
 
/
 
{
Z
O
O
M
_
S
T
A
G
E
S
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
/
d
i
v
>


 
 
)
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
 
S
t
a
g
e
A
r
t
(
{
 
s
t
a
g
e
,
 
i
d
x
 
}
:
 
{
 
s
t
a
g
e
:
 
t
y
p
e
o
f
 
Z
O
O
M
_
S
T
A
G
E
S
[
n
u
m
b
e
r
]
;
 
i
d
x
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




 
 
i
f
 
(
i
d
x
 
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
p
r
e


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
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
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
,
 
m
a
r
g
i
n
:
 
0
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
,
 
t
e
x
t
A
l
i
g
n
:
 
"
l
e
f
t
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


{
`
f
u
n
c
t
i
o
n
 
a
d
d
(
a
,
 
b
)
 
{


 
 
r
e
t
u
r
n
 
a
 
+
 
b
;


}
`
}


 
 
 
 
 
 
<
/
p
r
e
>


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
i
d
x
 
=
=
=
 
1
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
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
`
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
 
8
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
8
p
x
"
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
 
`
$
{
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
1
5
`
,


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
m
i
n
W
i
d
t
h
:
 
2
6
0
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
 
C
a
l
c
u
l
a
t
o
r


 
 
 
 
 
 
 
 
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
 
"
#
9
4
a
3
b
8
"
 
}
}
>
+
 
a
d
d
(
a
,
 
b
)
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
 
"
#
9
4
a
3
b
8
"
 
}
}
>
+
 
s
u
b
(
a
,
 
b
)
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
 
"
#
9
4
a
3
b
8
"
 
}
}
>
+
 
m
u
l
(
a
,
 
b
)
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
 
"
#
9
4
a
3
b
8
"
 
}
}
>
+
 
d
i
v
(
a
,
 
b
)
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
 
"
#
6
4
7
4
8
b
"
,
 
m
a
r
g
i
n
T
o
p
:
 
8
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
-
 
h
i
s
t
o
r
y
:
 
n
u
m
b
e
r
[
]


 
 
 
 
 
 
 
 
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




 
 
i
f
 
(
i
d
x
 
=
=
=
 
2
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
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
8
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
0
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
 
}
}
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
5
 
h
-
5
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
 
"
#
9
4
a
3
b
8
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
9
4
a
3
b
8
"
 
}
}
>
1
 
u
s
e
r
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
s
v
g
 
w
i
d
t
h
=
"
2
"
 
h
e
i
g
h
t
=
"
3
0
"
>
<
l
i
n
e
 
x
1
=
"
1
"
 
y
1
=
"
0
"
 
x
2
=
"
1
"
 
y
2
=
"
3
0
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
4
7
5
5
6
9
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
"
4
 
4
"
 
/
>
<
/
s
v
g
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
`
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
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
2
2
p
x
"
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
 
`
$
{
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
1
5
`
,
 
m
i
n
W
i
d
t
h
:
 
1
8
0
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
S
e
r
v
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
w
-
7
 
h
-
7
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
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
s
e
r
v
e
r


 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
9
4
a
3
b
8
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
C
a
l
c
u
l
a
t
o
r
 
c
l
a
s
s
 
i
n
s
i
d
e


 
 
 
 
 
 
 
 
 
 
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




 
 
i
f
 
(
i
d
x
 
=
=
=
 
3
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
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
 
}
}
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
6
 
h
-
6
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
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
-
0
.
0
2
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
1
,
0
0
0
,
0
0
0
 
u
s
e
r
s


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
6
 
h
-
6
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
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
 
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
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
3
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
T
R
A
F
F
I
C
_
B
A
R
_
O
P
A
C
I
T
I
E
S
.
m
a
p
(
(
o
p
a
c
i
t
y
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
 
2
,
 
h
e
i
g
h
t
:
 
1
0
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
 
1
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
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
,
 
o
p
a
c
i
t
y
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
i
o
n
:
 
`
s
d
-
f
l
i
c
k
e
r
-
$
{
i
 
%
 
5
}
 
0
.
6
s
 
i
n
f
i
n
i
t
e
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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


 
 
 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
"
2
"
 
h
e
i
g
h
t
=
"
3
0
"
>
<
l
i
n
e
 
x
1
=
"
1
"
 
y
1
=
"
0
"
 
x
2
=
"
1
"
 
y
2
=
"
3
0
"
 
s
t
r
o
k
e
=
{
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
 
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
2
"
 
/
>
<
/
s
v
g
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
`
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
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
8
p
x
 
2
6
p
x
"
,
 
m
i
n
W
i
d
t
h
:
 
2
2
0
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
 
`
$
{
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
}
2
2
`
,
 
a
n
i
m
a
t
i
o
n
:
 
"
s
d
-
s
h
a
k
e
 
0
.
1
8
s
 
i
n
f
i
n
i
t
e
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
S
e
r
v
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
w
-
8
 
h
-
8
 
m
x
-
a
u
t
o
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
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,
 
m
a
r
g
i
n
T
o
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
O
V
E
R
L
O
A
D
E
D


 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
c
o
l
o
r
:
 
s
t
a
g
e
.
b
a
d
g
e
C
o
l
o
r
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,
 
o
p
a
c
i
t
y
:
 
0
.
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
d
r
o
p
p
i
n
g
 
r
e
q
u
e
s
t
s


 
 
 
 
 
 
 
 
 
 
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
s
t
y
l
e
>
{
`


 
 
 
 
 
 
 
 
 
 
@
k
e
y
f
r
a
m
e
s
 
s
d
-
s
h
a
k
e
 
{
 
0
%
 
{
 
t
r
a
n
s
f
o
r
m
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
(
0
,
0
)
;
 
}
 
2
5
%
 
{
 
t
r
a
n
s
f
o
r
m
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
(
-
1
p
x
,
1
p
x
)
;
 
}
 
5
0
%
 
{
 
t
r
a
n
s
f
o
r
m
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
(
1
p
x
,
-
1
p
x
)
;
 
}
 
7
5
%
 
{
 
t
r
a
n
s
f
o
r
m
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
(
-
1
p
x
,
-
1
p
x
)
;
 
}
 
1
0
0
%
 
{
 
t
r
a
n
s
f
o
r
m
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
(
0
,
0
)
;
 
}
 
}


 
 
 
 
 
 
 
 
 
 
@
k
e
y
f
r
a
m
e
s
 
s
d
-
f
l
i
c
k
e
r
-
0
 
{
 
0
%
,
1
0
0
%
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
.
4
;
 
}
 
5
0
%
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
;
 
}
 
}


 
 
 
 
 
 
 
 
 
 
@
k
e
y
f
r
a
m
e
s
 
s
d
-
f
l
i
c
k
e
r
-
1
 
{
 
0
%
,
1
0
0
%
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
.
7
;
 
}
 
5
0
%
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
.
3
;
 
}
 
}


 
 
 
 
 
 
 
 
 
 
@
k
e
y
f
r
a
m
e
s
 
s
d
-
f
l
i
c
k
e
r
-
2
 
{
 
0
%
,
1
0
0
%
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
.
5
;
 
}
 
5
0
%
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
.
9
;
 
}
 
}


 
 
 
 
 
 
 
 
 
 
@
k
e
y
f
r
a
m
e
s
 
s
d
-
f
l
i
c
k
e
r
-
3
 
{
 
0
%
,
1
0
0
%
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
.
3
;
 
}
 
5
0
%
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
;
 
}
 
}


 
 
 
 
 
 
 
 
 
 
@
k
e
y
f
r
a
m
e
s
 
s
d
-
f
l
i
c
k
e
r
-
4
 
{
 
0
%
,
1
0
0
%
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
.
9
;
 
}
 
5
0
%
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
.
5
;
 
}
 
}


 
 
 
 
 
 
 
 
`
}
<
/
s
t
y
l
e
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
/
 
i
d
x
 
=
=
=
 
4
:
 
f
u
l
l
 
d
i
s
t
r
i
b
u
t
e
d
 
s
y
s
t
e
m


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
S
y
s
t
e
m
D
i
a
g
r
a
m
 
/
>


 
 
)
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
 
S
y
s
t
e
m
D
i
a
g
r
a
m
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
 
5
6
0
 
2
8
0
"
 
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
 
s
t
y
l
e
=
{
{
 
m
a
x
W
i
d
t
h
:
 
6
2
0
 
}
}
>


 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
s
d
-
a
r
r
o
w
"
 
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
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
6
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
6
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
0
 
0
 
L
 
1
0
 
5
 
L
 
0
 
1
0
 
z
"
 
f
i
l
l
=
"
#
9
4
a
3
b
8
"
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
s
t
y
l
e
>
{
`


 
 
 
 
 
 
 
 
 
 
@
k
e
y
f
r
a
m
e
s
 
s
d
-
d
o
t
 
{
 
f
r
o
m
 
{
 
o
f
f
s
e
t
-
d
i
s
t
a
n
c
e
:
 
0
%
;
 
}
 
t
o
 
{
 
o
f
f
s
e
t
-
d
i
s
t
a
n
c
e
:
 
1
0
0
%
;
 
}
 
}


 
 
 
 
 
 
 
 
 
 
.
s
d
-
f
l
o
w
 
{
 
a
n
i
m
a
t
i
o
n
:
 
s
d
-
d
o
t
 
2
.
2
s
 
l
i
n
e
a
r
 
i
n
f
i
n
i
t
e
;
 
o
f
f
s
e
t
-
r
o
t
a
t
e
:
 
0
d
e
g
;
 
}


 
 
 
 
 
 
 
 
`
}
<
/
s
t
y
l
e
>


 
 
 
 
 
 
<
/
d
e
f
s
>




 
 
 
 
 
 
{
/
*
 
E
d
g
e
s
 
*
/
}


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
7
0
 
1
4
0
 
L
 
1
6
0
 
1
4
0
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
4
a
3
b
8
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
1
.
5
"
 
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
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
s
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
2
3
0
 
1
4
0
 
L
 
3
2
0
 
8
0
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
4
a
3
b
8
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
1
.
5
"
 
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
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
s
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
2
3
0
 
1
4
0
 
L
 
3
2
0
 
1
4
0
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
4
a
3
b
8
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
1
.
5
"
 
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
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
s
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
2
3
0
 
1
4
0
 
L
 
3
2
0
 
2
0
0
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
4
a
3
b
8
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
1
.
5
"
 
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
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
s
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
3
9
0
 
8
0
 
L
 
4
8
0
 
1
4
0
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
4
a
3
b
8
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
1
.
5
"
 
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
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
s
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
3
9
0
 
1
4
0
 
L
 
4
8
0
 
1
4
0
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
4
a
3
b
8
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
1
.
5
"
 
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
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
s
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
3
9
0
 
2
0
0
 
L
 
4
8
0
 
1
4
0
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
4
a
3
b
8
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
1
.
5
"
 
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
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
s
d
-
a
r
r
o
w
)
"
 
/
>




 
 
 
 
 
 
{
/
*
 
A
n
i
m
a
t
e
d
 
f
l
o
w
i
n
g
 
d
o
t
s
 
*
/
}


 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
"
4
"
 
f
i
l
l
=
"
#
8
4
c
c
1
6
"
>


 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
M
o
t
i
o
n
 
d
u
r
=
"
2
.
2
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
p
a
t
h
=
"
M
 
7
0
 
1
4
0
 
L
 
1
6
0
 
1
4
0
 
L
 
1
6
0
 
1
4
0
"
 
/
>


 
 
 
 
 
 
<
/
c
i
r
c
l
e
>


 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
"
3
.
5
"
 
f
i
l
l
=
"
#
8
4
c
c
1
6
"
>


 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
M
o
t
i
o
n
 
d
u
r
=
"
1
.
8
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
p
a
t
h
=
"
M
 
2
3
0
 
1
4
0
 
L
 
3
2
0
 
8
0
"
 
/
>


 
 
 
 
 
 
<
/
c
i
r
c
l
e
>


 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
"
3
.
5
"
 
f
i
l
l
=
"
#
8
4
c
c
1
6
"
>


 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
M
o
t
i
o
n
 
d
u
r
=
"
1
.
8
s
"
 
b
e
g
i
n
=
"
0
.
6
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
p
a
t
h
=
"
M
 
2
3
0
 
1
4
0
 
L
 
3
2
0
 
1
4
0
"
 
/
>


 
 
 
 
 
 
<
/
c
i
r
c
l
e
>


 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
"
3
.
5
"
 
f
i
l
l
=
"
#
8
4
c
c
1
6
"
>


 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
M
o
t
i
o
n
 
d
u
r
=
"
1
.
8
s
"
 
b
e
g
i
n
=
"
1
.
2
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
p
a
t
h
=
"
M
 
2
3
0
 
1
4
0
 
L
 
3
2
0
 
2
0
0
"
 
/
>


 
 
 
 
 
 
<
/
c
i
r
c
l
e
>


 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
"
3
"
 
f
i
l
l
=
"
#
2
2
c
5
5
e
"
>


 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
M
o
t
i
o
n
 
d
u
r
=
"
2
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
p
a
t
h
=
"
M
 
3
9
0
 
1
4
0
 
L
 
4
8
0
 
1
4
0
"
 
/
>


 
 
 
 
 
 
<
/
c
i
r
c
l
e
>




 
 
 
 
 
 
{
/
*
 
N
o
d
e
s
 
*
/
}


 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
2
0
}
 
y
=
{
1
1
5
}
 
l
a
b
e
l
=
"
C
l
i
e
n
t
s
"
 
s
u
b
=
"
m
i
l
l
i
o
n
s
"
 
c
o
l
o
r
=
"
#
9
4
a
3
b
8
"
 
/
>


 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
1
6
0
}
 
y
=
{
1
1
5
}
 
l
a
b
e
l
=
"
L
B
"
 
s
u
b
=
"
l
o
a
d
 
b
a
l
a
n
c
e
r
"
 
c
o
l
o
r
=
"
#
3
b
8
2
f
6
"
 
/
>


 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
3
2
0
}
 
y
=
{
5
5
}
 
l
a
b
e
l
=
"
S
e
r
v
e
r
 
1
"
 
s
u
b
=
"
"
 
c
o
l
o
r
=
"
#
8
4
c
c
1
6
"
 
/
>


 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
3
2
0
}
 
y
=
{
1
1
5
}
 
l
a
b
e
l
=
"
S
e
r
v
e
r
 
2
"
 
s
u
b
=
"
"
 
c
o
l
o
r
=
"
#
8
4
c
c
1
6
"
 
/
>


 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
3
2
0
}
 
y
=
{
1
7
5
}
 
l
a
b
e
l
=
"
S
e
r
v
e
r
 
3
"
 
s
u
b
=
"
"
 
c
o
l
o
r
=
"
#
8
4
c
c
1
6
"
 
/
>


 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
4
8
0
}
 
y
=
{
1
1
5
}
 
l
a
b
e
l
=
"
D
a
t
a
b
a
s
e
"
 
s
u
b
=
"
+
 
c
a
c
h
e
"
 
c
o
l
o
r
=
"
#
1
4
b
8
a
6
"
 
/
>


 
 
 
 
<
/
s
v
g
>


 
 
)
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
 
N
o
d
e
B
o
x
(
{
 
x
,
 
y
,
 
l
a
b
e
l
,
 
s
u
b
,
 
c
o
l
o
r
 
}
:
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
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
;
 
s
u
b
:
 
s
t
r
i
n
g
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
 
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
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
"
7
0
"
 
h
e
i
g
h
t
=
"
5
0
"
 
r
x
=
"
6
"
 
f
i
l
l
=
{
`
$
{
c
o
l
o
r
}
2
2
`
}
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}
 
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
1
.
5
"
 
/
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
3
5
"
 
y
=
"
2
2
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
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
"
1
1
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
{
s
u
b
 
&
&
 
(


 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
3
5
"
 
y
=
"
3
6
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
9
4
a
3
b
8
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
"
8
.
5
"
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
{
s
u
b
}


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
g
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
W
h
a
t
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
A
c
t
u
a
l
l
y
 
I
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
W
h
a
t
I
t
I
s
(
)
 
{


 
 
c
o
n
s
t
 
p
o
i
n
t
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
I
t
 
i
s
 
t
h
e
 
d
i
s
c
i
p
l
i
n
e
 
o
f
 
d
e
s
i
g
n
i
n
g
 
s
y
s
t
e
m
s
 
u
n
d
e
r
 
c
o
n
s
t
r
a
i
n
t
.
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
S
c
a
l
e
,
 
l
a
t
e
n
c
y
,
 
a
v
a
i
l
a
b
i
l
i
t
y
,
 
c
o
s
t
,
 
t
e
a
m
 
s
i
z
e
,
 
d
e
a
d
l
i
n
e
.
 
E
v
e
r
y
 
d
e
s
i
g
n
 
d
e
c
i
s
i
o
n
 
t
r
a
d
e
s
 
o
n
e
 
c
o
n
s
t
r
a
i
n
t
 
a
g
a
i
n
s
t
 
a
n
o
t
h
e
r
.
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
i
s
 
t
h
e
 
c
r
a
f
t
 
o
f
 
m
a
k
i
n
g
 
t
h
o
s
e
 
t
r
a
d
e
s
 
d
e
l
i
b
e
r
a
t
e
l
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
I
t
 
i
s
 
n
o
t
 
d
i
a
g
r
a
m
s
 
w
i
t
h
 
b
o
x
e
s
.
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
y
o
n
e
 
c
a
n
 
d
r
a
w
 
b
o
x
e
s
.
 
T
h
e
 
d
i
a
g
r
a
m
 
i
s
 
j
u
s
t
 
t
h
e
 
o
u
t
p
u
t
.
 
T
h
e
 
w
o
r
k
 
i
s
 
t
h
e
 
t
h
i
n
k
i
n
g
:
 
w
h
a
t
 
b
r
e
a
k
s
 
f
i
r
s
t
,
 
w
h
a
t
 
h
a
p
p
e
n
s
 
a
t
 
1
0
x
 
l
o
a
d
,
 
w
h
i
c
h
 
c
o
m
p
o
n
e
n
t
 
b
e
c
o
m
e
s
 
t
h
e
 
b
o
t
t
l
e
n
e
c
k
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
I
t
 
i
s
 
a
 
s
e
n
i
o
r
-
e
n
g
i
n
e
e
r
 
s
k
i
l
l
,
 
n
o
t
 
a
 
s
e
p
a
r
a
t
e
 
r
o
l
e
.
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
J
u
n
i
o
r
 
e
n
g
i
n
e
e
r
s
 
w
r
i
t
e
 
c
o
d
e
 
t
h
a
t
 
p
a
s
s
e
s
 
t
e
s
t
s
.
 
S
e
n
i
o
r
 
e
n
g
i
n
e
e
r
s
 
w
r
i
t
e
 
s
y
s
t
e
m
s
 
t
h
a
t
 
s
u
r
v
i
v
e
 
p
r
o
d
u
c
t
i
o
n
.
 
T
h
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
 
i
s
 
t
h
e
 
a
b
i
l
i
t
y
 
t
o
 
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
 
w
h
a
t
 
y
o
u
 
c
a
n
n
o
t
 
d
i
r
e
c
t
l
y
 
r
u
n
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
I
t
 
i
s
 
t
e
s
t
e
d
 
i
n
 
t
w
o
 
d
i
s
t
i
n
c
t
 
i
n
t
e
r
v
i
e
w
 
r
o
u
n
d
s
.
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
H
L
D
 
(
a
r
c
h
i
t
e
c
t
u
r
e
,
 
s
c
a
l
i
n
g
,
 
d
i
s
t
r
i
b
u
t
e
d
 
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
)
 
a
n
d
 
L
L
D
 
(
c
l
a
s
s
 
d
e
s
i
g
n
,
 
m
a
c
h
i
n
e
 
c
o
d
i
n
g
)
.
 
B
o
t
h
 
r
o
u
n
d
s
 
g
a
t
e
 
o
f
f
e
r
s
 
a
t
 
I
n
d
i
a
n
 
a
n
d
 
g
l
o
b
a
l
 
t
e
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
.
 
L
e
v
e
l
 
1
,
 
L
e
s
s
o
n
 
2
 
c
o
v
e
r
s
 
t
h
e
 
s
p
l
i
t
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
W
h
a
t
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
a
c
t
u
a
l
l
y
 
i
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
B
e
f
o
r
e
 
w
e
 
g
e
t
 
t
o
 
a
n
y
 
t
e
c
h
n
i
q
u
e
,
 
f
o
u
r
 
c
l
a
i
m
s
 
a
b
o
u
t
 
t
h
e
 
d
i
s
c
i
p
l
i
n
e
 
i
t
s
e
l
f
.
 
R
e
a
d
 
t
h
e
s
e
 
a
s
 
t
h
e
 
f
r
a
m
e


 
 
 
 
 
 
 
 
y
o
u
 
w
i
l
l
 
p
u
t
 
e
v
e
r
y
 
l
a
t
e
r
 
l
e
s
s
o
n
 
i
n
s
i
d
e
.


 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
a
p
:
 
1
2
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
p
o
i
n
t
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
c
a
r
d
H
o
v
e
r
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
c
a
r
d
-
e
n
g
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
L
A
I
M
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
1
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
b
o
d
y
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
W
h
e
r
e
 
i
t
 
s
h
o
w
s
 
u
p
 
i
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
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
W
h
e
r
e
I
t
S
h
o
w
s
U
p
(
)
 
{


 
 
c
o
n
s
t
 
r
o
w
s
:
 
{
 
c
o
m
p
a
n
y
:
 
s
t
r
i
n
g
;
 
r
o
u
n
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
y
l
e
:
 
"
H
L
D
"
 
|
 
"
L
L
D
"
 
|
 
"
B
o
t
h
"
;
 
e
x
a
m
p
l
e
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
 
c
o
m
p
a
n
y
:
 
"
G
o
o
g
l
e
"
,
 
r
o
u
n
d
:
 
"
S
y
s
t
e
m
s
 
D
e
s
i
g
n
 
(
4
5
 
m
i
n
)
"
,
 
s
t
y
l
e
:
 
"
H
L
D
"
,
 
e
x
a
m
p
l
e
:
 
"
D
e
s
i
g
n
 
Y
o
u
T
u
b
e
 
v
i
d
e
o
 
u
p
l
o
a
d
.
"
 
}
,


 
 
 
 
{
 
c
o
m
p
a
n
y
:
 
"
A
m
a
z
o
n
"
,
 
r
o
u
n
d
:
 
"
S
y
s
t
e
m
 
D
e
s
i
g
n
 
(
w
i
t
h
 
B
a
r
 
R
a
i
s
e
r
)
"
,
 
s
t
y
l
e
:
 
"
H
L
D
"
,
 
e
x
a
m
p
l
e
:
 
"
D
e
s
i
g
n
 
a
n
 
e
-
c
o
m
m
e
r
c
e
 
c
h
e
c
k
o
u
t
.
"
 
}
,


 
 
 
 
{
 
c
o
m
p
a
n
y
:
 
"
F
l
i
p
k
a
r
t
"
,
 
r
o
u
n
d
:
 
"
M
a
c
h
i
n
e
 
C
o
d
i
n
g
 
(
9
0
 
m
i
n
)
"
,
 
s
t
y
l
e
:
 
"
L
L
D
"
,
 
e
x
a
m
p
l
e
:
 
"
I
m
p
l
e
m
e
n
t
 
a
 
p
a
r
k
i
n
g
 
l
o
t
 
s
y
s
t
e
m
 
i
n
 
J
a
v
a
.
"
 
}
,


 
 
 
 
{
 
c
o
m
p
a
n
y
:
 
"
M
e
t
a
"
,
 
r
o
u
n
d
:
 
"
P
r
o
d
u
c
t
 
A
r
c
h
i
t
e
c
t
u
r
e
"
,
 
s
t
y
l
e
:
 
"
H
L
D
"
,
 
e
x
a
m
p
l
e
:
 
"
D
e
s
i
g
n
 
t
h
e
 
n
e
w
s
 
f
e
e
d
 
r
a
n
k
i
n
g
 
p
i
p
e
l
i
n
e
.
"
 
}
,


 
 
 
 
{
 
c
o
m
p
a
n
y
:
 
"
A
t
l
a
s
s
i
a
n
"
,
 
r
o
u
n
d
:
 
"
C
r
a
f
t
 
&
 
D
e
s
i
g
n
"
,
 
s
t
y
l
e
:
 
"
L
L
D
"
,
 
e
x
a
m
p
l
e
:
 
"
D
e
s
i
g
n
 
t
h
e
 
c
l
a
s
s
e
s
 
f
o
r
 
a
 
J
i
r
a
 
i
s
s
u
e
 
t
r
a
c
k
e
r
.
"
 
}
,


 
 
 
 
{
 
c
o
m
p
a
n
y
:
 
"
S
w
i
g
g
y
"
,
 
r
o
u
n
d
:
 
"
S
y
s
t
e
m
 
D
e
s
i
g
n
 
+
 
M
a
c
h
i
n
e
 
C
o
d
i
n
g
"
,
 
s
t
y
l
e
:
 
"
B
o
t
h
"
,
 
e
x
a
m
p
l
e
:
 
"
D
e
s
i
g
n
 
S
w
i
g
g
y
 
d
e
l
i
v
e
r
y
 
d
i
s
p
a
t
c
h
 
(
H
L
D
)
 
+
 
I
m
p
l
e
m
e
n
t
 
c
a
r
t
 
s
e
r
v
i
c
e
 
(
L
L
D
)
.
"
 
}
,


 
 
 
 
{
 
c
o
m
p
a
n
y
:
 
"
M
i
c
r
o
s
o
f
t
"
,
 
r
o
u
n
d
:
 
"
D
e
s
i
g
n
 
R
o
u
n
d
"
,
 
s
t
y
l
e
:
 
"
H
L
D
"
,
 
e
x
a
m
p
l
e
:
 
"
D
e
s
i
g
n
 
a
 
U
R
L
 
s
h
o
r
t
e
n
e
r
 
a
t
 
B
i
n
g
 
s
c
a
l
e
.
"
 
}
,


 
 
 
 
{
 
c
o
m
p
a
n
y
:
 
"
U
b
e
r
"
,
 
r
o
u
n
d
:
 
"
S
y
s
t
e
m
 
D
e
s
i
g
n
"
,
 
s
t
y
l
e
:
 
"
H
L
D
"
,
 
e
x
a
m
p
l
e
:
 
"
D
e
s
i
g
n
 
d
r
i
v
e
r
-
r
i
d
e
r
 
m
a
t
c
h
i
n
g
.
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
W
h
e
r
e
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
s
h
o
w
s
 
u
p
 
i
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
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
R
e
a
l
 
r
o
u
n
d
s
 
f
r
o
m
 
c
o
m
p
a
n
i
e
s
 
t
h
a
t
 
h
i
r
e
 
i
n
 
I
n
d
i
a
.
 
N
o
t
i
c
e
:
 
H
L
D
 
a
n
d
 
L
L
D
 
a
r
e


 
 
 
 
 
 
 
 
g
e
n
u
i
n
e
l
y
 
s
e
p
a
r
a
t
e
 
r
o
u
n
d
s
 
a
t
 
m
o
s
t
 
p
l
a
c
e
s
.
 
Y
o
u
 
m
u
s
t
 
p
r
e
p
a
r
e
 
f
o
r
 
b
o
t
h
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
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
 
1
0
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
3
0
p
x
 
1
f
r
 
9
0
p
x
 
1
.
2
f
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
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
 
"
#
f
8
f
a
f
c
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
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
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>
C
o
m
p
a
n
y
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
R
o
u
n
d
 
N
a
m
e
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
S
t
y
l
e
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
E
x
a
m
p
l
e
 
P
r
o
m
p
t
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
r
o
w
s
.
m
a
p
(
(
r
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
 
s
t
y
l
e
C
o
l
o
r
 
=
 
r
.
s
t
y
l
e
 
=
=
=
 
"
H
L
D
"
 
?
 
S
D
 
:
 
r
.
s
t
y
l
e
 
=
=
=
 
"
L
L
D
"
 
?
 
"
#
1
4
b
8
a
6
"
 
:
 
"
#
8
b
5
c
f
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
3
0
p
x
 
1
f
r
 
9
0
p
x
 
1
.
2
f
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
r
o
w
s
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
r
.
c
o
m
p
a
n
y
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>
{
r
.
r
o
u
n
d
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
8
p
x
"
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
 
4
,
 
c
o
l
o
r
:
 
s
t
y
l
e
C
o
l
o
r
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
 
`
$
{
s
t
y
l
e
C
o
l
o
r
}
1
6
`
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
s
t
y
l
e
C
o
l
o
r
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
s
t
y
l
e
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
 
}
}
>
{
r
.
e
x
a
m
p
l
e
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
8
,
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
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
 
8
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
 
S
D
_
S
O
F
T
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
S
D
_
B
O
R
D
E
R
}
`
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
S
E
N
I
O
R
 
N
O
T
E


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
I
n
d
i
a
n
 
s
e
r
v
i
c
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
 
(
T
C
S
,
 
I
n
f
o
s
y
s
)
 
r
a
r
e
l
y
 
a
s
k
 
a
 
f
u
l
l
 
s
y
s
t
e
m
 
d
e
s
i
g
n
 
r
o
u
n
d
.
 
P
r
o
d
u
c
t


 
 
 
 
 
 
 
 
 
 
c
o
m
p
a
n
i
e
s
 
(
F
A
A
N
G
,
 
F
l
i
p
k
a
r
t
,
 
S
w
i
g
g
y
,
 
Z
o
m
a
t
o
,
 
R
a
z
o
r
p
a
y
,
 
C
R
E
D
)
 
a
l
w
a
y
s
 
d
o
.
 
I
f
 
y
o
u
 
a
r
e
 
t
a
r
g
e
t
i
n
g


 
 
 
 
 
 
 
 
 
 
p
r
o
d
u
c
t
 
c
o
m
p
a
n
i
e
s
,
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
i
s
 
n
o
t
 
o
p
t
i
o
n
a
l
.


 
 
 
 
 
 
 
 
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
D
_
L
1
_
W
h
a
t
I
s
S
y
s
t
e
m
D
e
s
i
g
n
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
z
o
o
m
"
,
 
l
a
b
e
l
:
 
"
Z
o
o
m
 
O
u
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
a
y
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
Z
o
o
m
O
u
t
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
w
h
a
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
W
h
a
t
 
I
t
 
I
s
"
,
 
i
c
o
n
:
 
<
B
l
o
c
k
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
W
h
a
t
I
t
I
s
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
w
h
e
r
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
W
h
e
r
e
 
I
t
 
S
h
o
w
s
 
U
p
"
,
 
i
c
o
n
:
 
<
G
l
o
b
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
W
h
e
r
e
I
t
S
h
o
w
s
U
p
 
/
>
 
}
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
 
E
n
g
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
Y
o
u
 
a
r
e
 
w
r
i
t
i
n
g
 
a
 
f
u
n
c
t
i
o
n
 
t
h
a
t
 
s
o
r
t
s
 
a
 
l
i
s
t
 
o
f
 
n
u
m
b
e
r
s
.
 
W
h
i
c
h
 
d
i
s
c
i
p
l
i
n
e
 
h
a
n
d
l
e
s
 
t
h
i
s
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
S
y
s
t
e
m
 
D
e
s
i
g
n
"
,


 
 
 
 
 
 
 
 
"
D
a
t
a
 
S
t
r
u
c
t
u
r
e
s
 
&
 
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
"
,


 
 
 
 
 
 
 
 
"
H
L
D
"
,


 
 
 
 
 
 
 
 
"
L
L
D
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
S
i
n
g
l
e
 
f
u
n
c
t
i
o
n
,
 
o
n
e
 
i
n
p
u
t
,
 
o
n
e
 
o
u
t
p
u
t
,
 
r
u
n
s
 
o
n
 
o
n
e
 
m
a
c
h
i
n
e
.
 
T
h
a
t
 
i
s
 
D
S
A
-
l
a
n
d
.
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
b
e
g
i
n
s
 
w
h
e
n
 
a
 
s
i
n
g
l
e
 
m
a
c
h
i
n
e
 
i
s
 
n
o
 
l
o
n
g
e
r
 
e
n
o
u
g
h
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
Y
o
u
r
 
s
e
r
v
i
c
e
 
i
s
 
a
t
 
5
0
0
 
r
e
q
u
e
s
t
s
 
p
e
r
 
s
e
c
o
n
d
 
a
n
d
 
a
 
s
i
n
g
l
e
 
b
o
x
 
i
s
 
h
a
n
d
l
i
n
g
 
i
t
 
f
i
n
e
.
 
Y
o
u
 
t
h
e
n
 
l
e
a
r
n
 
t
h
a
t
 
n
e
x
t
 
m
o
n
t
h
 
m
a
r
k
e
t
i
n
g
 
w
i
l
l
 
p
u
s
h
 
y
o
u
 
t
o
 
5
0
0
,
0
0
0
 
R
P
S
.
 
W
h
a
t
 
y
o
u
 
d
o
 
n
e
x
t
 
i
s
 
p
r
i
m
a
r
i
l
y
.
.
.
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
g
o
r
i
t
h
m
 
o
p
t
i
m
i
z
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
C
l
e
a
n
 
c
o
d
e
 
r
e
f
a
c
t
o
r
i
n
g
"
,


 
 
 
 
 
 
 
 
"
S
y
s
t
e
m
 
D
e
s
i
g
n
"
,


 
 
 
 
 
 
 
 
"
D
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
 
s
e
l
e
c
t
i
o
n
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
A
 
1
0
0
0
x
 
t
r
a
f
f
i
c
 
i
n
c
r
e
a
s
e
 
i
s
 
n
o
t
 
s
o
l
v
e
d
 
b
y
 
a
 
f
a
s
t
e
r
 
f
u
n
c
t
i
o
n
.
 
Y
o
u
 
n
e
e
d
 
l
o
a
d
 
b
a
l
a
n
c
e
r
s
,
 
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
 
s
c
a
l
i
n
g
,
 
c
a
c
h
i
n
g
,
 
a
n
d
 
p
o
s
s
i
b
l
y
 
s
h
a
r
d
i
n
g
.
 
T
h
i
s
 
i
s
 
e
x
a
c
t
l
y
 
w
h
a
t
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
c
o
v
e
r
s
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
i
c
h
 
s
t
a
t
e
m
e
n
t
 
b
e
s
t
 
c
a
p
t
u
r
e
s
 
w
h
a
t
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
i
s
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
D
r
a
w
i
n
g
 
a
r
c
h
i
t
e
c
t
u
r
e
 
d
i
a
g
r
a
m
s
 
w
i
t
h
 
b
o
x
e
s
 
a
n
d
 
a
r
r
o
w
s
.
"
,


 
 
 
 
 
 
 
 
"
M
e
m
o
r
i
z
i
n
g
 
f
a
m
o
u
s
 
s
y
s
t
e
m
 
d
e
s
i
g
n
s
 
l
i
k
e
 
T
w
i
t
t
e
r
 
a
n
d
 
U
b
e
r
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
d
i
s
c
i
p
l
i
n
e
 
o
f
 
m
a
k
i
n
g
 
e
n
g
i
n
e
e
r
i
n
g
 
d
e
c
i
s
i
o
n
s
 
u
n
d
e
r
 
c
o
n
s
t
r
a
i
n
t
s
 
l
i
k
e
 
s
c
a
l
e
,
 
l
a
t
e
n
c
y
,
 
c
o
s
t
,
 
a
n
d
 
f
a
i
l
u
r
e
.
"
,


 
 
 
 
 
 
 
 
"
L
e
a
r
n
i
n
g
 
A
W
S
 
a
n
d
 
K
u
b
e
r
n
e
t
e
s
.
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
D
i
a
g
r
a
m
s
 
a
r
e
 
t
h
e
 
o
u
t
p
u
t
;
 
t
o
o
l
s
 
a
r
e
 
t
h
e
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
.
 
T
h
e
 
w
o
r
k
 
i
t
s
e
l
f
 
i
s
 
t
h
e
 
r
e
a
s
o
n
i
n
g
 
a
b
o
u
t
 
c
o
n
s
t
r
a
i
n
t
s
 
a
n
d
 
t
r
a
d
e
o
f
f
s
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
i
c
h
 
p
a
i
r
 
o
f
 
i
n
t
e
r
v
i
e
w
 
r
o
u
n
d
s
 
m
o
s
t
 
c
o
m
m
o
n
l
y
 
t
e
s
t
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
a
t
 
I
n
d
i
a
n
 
p
r
o
d
u
c
t
 
c
o
m
p
a
n
i
e
s
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
C
o
d
i
n
g
 
r
o
u
n
d
 
+
 
H
R
 
r
o
u
n
d
"
,


 
 
 
 
 
 
 
 
"
H
L
D
 
(
a
r
c
h
i
t
e
c
t
u
r
e
)
 
r
o
u
n
d
 
+
 
L
L
D
 
(
m
a
c
h
i
n
e
 
c
o
d
i
n
g
)
 
r
o
u
n
d
"
,


 
 
 
 
 
 
 
 
"
D
S
A
 
r
o
u
n
d
 
+
 
B
e
h
a
v
i
o
r
a
l
 
r
o
u
n
d
"
,


 
 
 
 
 
 
 
 
"
S
y
s
t
e
m
s
 
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
 
+
 
L
e
a
d
e
r
s
h
i
p
 
r
o
u
n
d
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
H
L
D
 
a
n
d
 
L
L
D
 
a
r
e
 
t
e
s
t
e
d
 
a
s
 
d
i
s
t
i
n
c
t
 
r
o
u
n
d
s
.
 
L
e
v
e
l
 
1
 
L
e
s
s
o
n
 
2
 
c
o
v
e
r
s
 
t
h
e
 
e
x
a
c
t
 
s
p
l
i
t
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
E
n
g
i
n
e
e
r
i
n
g
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
W
h
a
t
 
i
s
 
S
y
s
t
e
m
 
D
e
s
i
g
n
?
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
1
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
 
f
o
r
 
e
v
e
r
y
 
H
L
D
 
a
n
d
 
L
L
D
 
r
o
u
n
d
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


