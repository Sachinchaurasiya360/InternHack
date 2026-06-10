
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


 
 
L
a
y
e
r
s
,
 
A
r
r
o
w
U
p
,
 
S
e
r
v
e
r
,
 
T
r
e
n
d
i
n
g
U
p
,
 
G
i
t
C
o
m
p
a
r
e
,
 
A
l
e
r
t
T
r
i
a
n
g
l
e
,
 
C
h
e
c
k
,
 
X
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




c
o
n
s
t
 
U
P
_
C
O
L
O
R
 
=
 
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


c
o
n
s
t
 
O
U
T
_
C
O
L
O
R
 
=
 
"
#
1
0
b
9
8
1
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
 
I
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
o
m
p
a
r
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
C
o
m
p
a
r
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
l
o
a
d
,
 
s
e
t
L
o
a
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
(
5
0
)
;




 
 
c
o
n
s
t
 
c
a
p
V
 
=
 
1
0
0
;
 
 
 
 
 
 
 
 
 
 
/
/
 
b
i
g
 
s
i
n
g
l
e
 
b
o
x
 
c
a
p
a
c
i
t
y


 
 
c
o
n
s
t
 
c
a
p
H
 
=
 
3
0
;
 
 
 
 
 
 
 
 
 
 
 
/
/
 
e
a
c
h
 
s
m
a
l
l
 
b
o
x
 
c
a
p
a
c
i
t
y


 
 
c
o
n
s
t
 
m
i
n
S
e
r
v
e
r
s
H
 
=
 
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
 
M
a
t
h
.
c
e
i
l
(
l
o
a
d
 
/
 
c
a
p
H
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
S
a
m
e
 
l
o
a
d
.
 
T
w
o
 
v
e
r
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
 
a
n
s
w
e
r
s
.
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


 
 
 
 
 
 
 
 
W
h
e
n
 
a
 
s
e
r
v
e
r
 
i
s
 
o
v
e
r
l
o
a
d
e
d
,
 
y
o
u
 
h
a
v
e
 
t
w
o
 
c
h
o
i
c
e
s
:
 
m
a
k
e
 
t
h
e
 
<
e
m
>
o
n
e
<
/
e
m
>
 
s
e
r
v
e
r
 
b
i
g
g
e
r


 
 
 
 
 
 
 
 
(
v
e
r
t
i
c
a
l
 
/
 
s
c
a
l
e
 
u
p
)
 
o
r
 
r
u
n
 
<
e
m
>
m
o
r
e
<
/
e
m
>
 
s
e
r
v
e
r
s
 
i
n
 
p
a
r
a
l
l
e
l
 
(
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
 
/
 
s
c
a
l
e
 
o
u
t
)
.


 
 
 
 
 
 
 
 
B
o
t
h
 
w
o
r
k
.
 
R
e
a
l
 
s
y
s
t
e
m
s
 
d
o
 
b
o
t
h
.
 
B
u
t
 
t
h
e
 
t
r
a
d
e
o
f
f
s
 
a
r
e
 
w
i
l
d
l
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
 
2
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
s
p
a
c
e
-
b
e
t
w
e
e
n
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
 
}
}
>
T
r
a
f
f
i
c
 
l
o
a
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
 
S
D
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
 
}
}
>
{
l
o
a
d
}
 
Q
P
S
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
r
a
n
g
e
"
 
m
i
n
=
{
1
0
}
 
m
a
x
=
{
2
0
0
}
 
s
t
e
p
=
{
5
}
 
v
a
l
u
e
=
{
l
o
a
d
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
L
o
a
d
(
N
u
m
b
e
r
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
 
w
i
d
t
h
:
 
"
1
0
0
%
"
,
 
a
c
c
e
n
t
C
o
l
o
r
:
 
S
D
 
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
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
{
/
*
 
V
e
r
t
i
c
a
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
U
P
_
C
O
L
O
R
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
2
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
 
`
$
{
U
P
_
C
O
L
O
R
}
1
0
`
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
2
0
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
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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
 
U
P
_
C
O
L
O
R
 
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
S
i
z
e
:
 
"
1
.
0
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
 
U
P
_
C
O
L
O
R
 
}
}
>
V
e
r
t
i
c
a
l
 
(
S
c
a
l
e
 
U
p
)
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
-
m
u
t
e
d
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
 
1
4
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


 
 
 
 
 
 
 
 
 
 
 
 
K
e
e
p
 
o
n
e
 
s
e
r
v
e
r
.
 
G
i
v
e
 
i
t
 
m
o
r
e
 
C
P
U
,
 
m
o
r
e
 
R
A
M
,
 
f
a
s
t
e
r
 
d
i
s
k
.


 
 
 
 
 
 
 
 
 
 
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
 
3
0
0
 
1
4
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
 
"
1
0
0
%
"
,
 
h
e
i
g
h
t
:
 
1
4
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
i
g
 
s
e
r
v
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
8
0
"
 
y
=
"
1
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
4
0
"
 
h
e
i
g
h
t
=
{
2
0
 
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
1
1
0
,
 
l
o
a
d
 
*
 
0
.
9
)
}
 
r
x
=
"
8
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
U
P
_
C
O
L
O
R
}
2
5
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
U
P
_
C
O
L
O
R
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
t
e
x
t
 
x
=
"
1
5
0
"
 
y
=
{
3
0
 
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
5
5
,
 
l
o
a
d
 
*
 
0
.
4
5
)
}
 
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
2
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
i
l
l
=
{
U
P
_
C
O
L
O
R
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
}
 
/
 
{
c
a
p
V
}
 
Q
P
S


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
 
>
 
c
a
p
V
 
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
1
5
0
"
 
y
=
{
1
3
0
}
 
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
2
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
i
l
l
=
{
S
D
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
⚠
 
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
 
-
 
h
a
r
d
w
a
r
e
 
c
e
i
l
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
c
o
l
o
r
:
 
U
P
_
C
O
L
O
R
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
 
1
0
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
S
e
r
v
e
r
 
c
o
u
n
t
:
 
1
 
·
 
C
a
p
a
c
i
t
y
:
 
{
c
a
p
V
}
 
Q
P
S


 
 
 
 
 
 
 
 
 
 
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
 
H
o
r
i
z
o
n
t
a
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
O
U
T
_
C
O
L
O
R
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
2
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
 
`
$
{
O
U
T
_
C
O
L
O
R
}
1
0
`
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
2
0
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
 
1
0
 
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
 
O
U
T
_
C
O
L
O
R
 
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
S
i
z
e
:
 
"
1
.
0
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
 
O
U
T
_
C
O
L
O
R
 
}
}
>
H
o
r
i
z
o
n
t
a
l
 
(
S
c
a
l
e
 
O
u
t
)
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
-
m
u
t
e
d
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
 
1
4
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


 
 
 
 
 
 
 
 
 
 
 
 
K
e
e
p
 
o
n
e
 
s
e
r
v
e
r
 
s
m
a
l
l
.
 
R
u
n
 
m
o
r
e
 
c
o
p
i
e
s
 
o
f
 
i
t
.
 
P
u
t
 
a
 
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
 
i
n
 
f
r
o
n
t
.


 
 
 
 
 
 
 
 
 
 
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
 
3
0
0
 
1
4
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
 
"
1
0
0
%
"
,
 
h
e
i
g
h
t
:
 
1
4
0
 
}
}
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
 
M
a
t
h
.
m
i
n
(
6
,
 
m
i
n
S
e
r
v
e
r
s
H
)
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
3
0
 
+
 
i
 
*
 
4
2
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
x
}
 
y
=
"
3
0
"
 
w
i
d
t
h
=
"
3
4
"
 
h
e
i
g
h
t
=
"
8
0
"
 
r
x
=
"
5
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
O
U
T
_
C
O
L
O
R
}
2
5
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
O
U
T
_
C
O
L
O
R
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
{
x
 
+
 
1
7
}
 
y
=
"
7
5
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
0
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
i
l
l
=
{
O
U
T
_
C
O
L
O
R
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
M
a
t
h
.
m
i
n
(
c
a
p
H
,
 
M
a
t
h
.
c
e
i
l
(
l
o
a
d
 
/
 
m
i
n
S
e
r
v
e
r
s
H
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
m
i
n
S
e
r
v
e
r
s
H
 
>
 
6
 
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
2
6
0
"
 
y
=
"
7
5
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
s
t
a
r
t
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
2
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
i
l
l
=
{
O
U
T
_
C
O
L
O
R
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
+
{
m
i
n
S
e
r
v
e
r
s
H
 
-
 
6
}
 
m
o
r
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
c
o
l
o
r
:
 
O
U
T
_
C
O
L
O
R
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
 
1
0
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
S
e
r
v
e
r
 
c
o
u
n
t
:
 
{
m
i
n
S
e
r
v
e
r
s
H
}
 
·
 
E
a
c
h
 
@
 
{
c
a
p
H
}
 
Q
P
S


 
 
 
 
 
 
 
 
 
 
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
 
`
1
.
5
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
 
S
D
_
S
O
F
T
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
0
8
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
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
U
N
C
O
M
F
O
R
T
A
B
L
E
 
T
R
U
T
H


 
 
 
 
 
 
 
 
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
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
V
e
r
t
i
c
a
l
 
s
c
a
l
i
n
g
 
h
a
s
 
a
 
<
b
>
h
a
r
d
 
c
e
i
l
i
n
g
<
/
b
>
 
-
 
t
h
e
 
b
i
g
g
e
s
t
 
m
a
c
h
i
n
e
 
y
o
u
 
c
a
n
 
b
u
y
.
 
H
o
r
i
z
o
n
t
a
l


 
 
 
 
 
 
 
 
 
 
h
a
s
 
(
a
l
m
o
s
t
)
 
n
o
 
c
e
i
l
i
n
g
 
-
 
y
o
u
 
j
u
s
t
 
k
e
e
p
 
a
d
d
i
n
g
 
b
o
x
e
s
.
 
T
h
a
t
&
r
s
q
u
o
;
s
 
w
h
y
 
e
v
e
r
y
 
h
y
p
e
r
s
c
a
l
e


 
 
 
 
 
 
 
 
 
 
s
y
s
t
e
m
 
o
n
 
E
a
r
t
h
 
i
s
 
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
.
 
B
u
t
 
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
 
i
s
 
h
a
r
d
e
r
:
 
i
t
 
f
o
r
c
e
s
 
y
o
u
 
t
o
 
t
h
i
n
k
 
a
b
o
u
t


 
 
 
 
 
 
 
 
 
 
c
o
o
r
d
i
n
a
t
i
o
n
,
 
s
h
a
r
d
i
n
g
,
 
a
n
d
 
<
e
m
>
s
t
a
t
e
l
e
s
s
n
e
s
s
<
/
e
m
>
 
(
n
e
x
t
 
l
e
s
s
o
n
)
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
 
 
T
A
B
 
2
 
-
 
T
r
a
d
e
o
f
f
 
t
a
b
l
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
T
r
a
d
e
o
f
f
s
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
 
=
 
[


 
 
 
 
{
 
a
s
p
e
c
t
:
 
"
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
,
 
 
 
 
 
 
 
 
 
 
v
:
 
"
L
o
w
 
-
 
o
n
e
 
b
o
x
"
,
 
v
G
o
o
d
:
 
t
r
u
e
,
 
 
h
:
 
"
H
i
g
h
 
-
 
c
o
o
r
d
i
n
a
t
i
o
n
,
 
L
B
,
 
d
e
p
l
o
y
s
"
,
 
h
G
o
o
d
:
 
f
a
l
s
e
 
}
,


 
 
 
 
{
 
a
s
p
e
c
t
:
 
"
C
o
s
t
 
c
u
r
v
e
"
,
 
 
 
 
 
 
 
 
 
 
v
:
 
"
N
o
n
-
l
i
n
e
a
r
 
(
b
i
g
 
b
o
x
e
s
 
g
e
t
 
e
x
p
e
n
s
i
v
e
 
f
a
s
t
)
"
,
 
v
G
o
o
d
:
 
f
a
l
s
e
,
 
h
:
 
"
R
o
u
g
h
l
y
 
l
i
n
e
a
r
 
w
i
t
h
 
l
o
a
d
"
,
 
h
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
 
 
{
 
a
s
p
e
c
t
:
 
"
C
e
i
l
i
n
g
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
v
:
 
"
H
a
r
d
 
(
b
i
g
g
e
s
t
 
a
v
a
i
l
a
b
l
e
 
C
P
U
)
"
,
 
v
G
o
o
d
:
 
f
a
l
s
e
,
 
h
:
 
"
P
r
a
c
t
i
c
a
l
l
y
 
u
n
b
o
u
n
d
e
d
"
,
 
h
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
 
 
{
 
a
s
p
e
c
t
:
 
"
F
a
i
l
u
r
e
 
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
"
,
v
:
 
"
O
n
e
 
b
o
x
 
d
o
w
n
 
=
 
e
v
e
r
y
t
h
i
n
g
 
d
o
w
n
"
,
 
v
G
o
o
d
:
 
f
a
l
s
e
,
 
h
:
 
"
O
n
e
 
b
o
x
 
d
o
w
n
 
=
 
s
m
a
l
l
 
f
r
a
c
t
i
o
n
 
a
f
f
e
c
t
e
d
"
,
 
h
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
 
 
{
 
a
s
p
e
c
t
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
 
 
 
 
 
 
 
 
 
 
v
:
 
"
U
s
u
a
l
l
y
 
r
e
q
u
i
r
e
s
 
d
o
w
n
t
i
m
e
"
,
 
v
G
o
o
d
:
 
f
a
l
s
e
,
 
h
:
 
"
R
o
l
l
i
n
g
 
d
e
p
l
o
y
s
,
 
z
e
r
o
 
d
o
w
n
t
i
m
e
 
p
o
s
s
i
b
l
e
"
,
 
h
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
 
 
{
 
a
s
p
e
c
t
:
 
"
S
t
a
t
e
 
m
a
n
a
g
e
m
e
n
t
"
,
 
 
 
 
v
:
 
"
E
a
s
y
 
-
 
i
t
'
s
 
a
l
l
 
i
n
 
o
n
e
 
p
l
a
c
e
"
,
 
v
G
o
o
d
:
 
t
r
u
e
,
 
 
h
:
 
"
H
a
r
d
 
-
 
n
e
e
d
s
 
R
e
d
i
s
 
/
 
s
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
/
 
e
x
t
e
r
n
a
l
 
s
t
o
r
e
"
,
 
h
G
o
o
d
:
 
f
a
l
s
e
 
}
,


 
 
 
 
{
 
a
s
p
e
c
t
:
 
"
D
e
v
 
e
n
v
i
r
o
n
m
e
n
t
"
,
 
 
 
 
 
v
:
 
"
R
u
n
s
 
o
n
 
y
o
u
r
 
l
a
p
t
o
p
"
,
 
v
G
o
o
d
:
 
t
r
u
e
,
 
h
:
 
"
N
e
e
d
s
 
d
o
c
k
e
r
-
c
o
m
p
o
s
e
 
o
r
 
m
o
r
e
"
,
 
h
G
o
o
d
:
 
f
a
l
s
e
 
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
T
h
e
 
t
r
a
d
e
o
f
f
 
t
a
b
l
e
 
y
o
u
 
d
r
a
w
 
o
n
 
t
h
e
 
w
h
i
t
e
b
o
a
r
d
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
 
l
o
v
e
 
t
h
i
s
 
t
a
b
l
e
.
 
I
f
 
y
o
u
 
c
a
n
 
r
e
p
r
o
d
u
c
e
 
i
t
 
f
r
o
m
 
m
e
m
o
r
y
 
a
n
d
 
p
i
c
k
 
t
h
e
 
r
i
g
h
t
 
s
i
d
e


 
 
 
 
 
 
 
 
f
o
r
 
a
 
g
i
v
e
n
 
s
c
e
n
a
r
i
o
,
 
y
o
u
&
r
s
q
u
o
;
v
e
 
a
l
r
e
a
d
y
 
s
h
o
w
n
 
s
e
n
i
o
r
-
l
e
v
e
l
 
j
u
d
g
m
e
n
t
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
o
r
d
e
r
:
 
"
1
.
5
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
.
2
f
r
 
1
.
5
f
r
 
1
.
5
f
r
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
B
o
t
t
o
m
:
 
`
1
.
5
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
}
`
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
 
g
a
p
:
 
1
0
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
0
8
e
m
"
 
}
}
>
A
S
P
E
C
T
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
 
U
P
_
C
O
L
O
R
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
 
}
}
>
V
E
R
T
I
C
A
L
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
 
O
U
T
_
C
O
L
O
R
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
 
}
}
>
H
O
R
I
Z
O
N
T
A
L
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
r
.
a
s
p
e
c
t
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
.
2
f
r
 
1
.
5
f
r
 
1
.
5
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
 
%
 
2
 
=
=
=
 
0
 
?
 
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
b
g
)
"
 
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
b
g
-
s
u
b
t
l
e
)
"
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
 
}
}
>
{
r
.
a
s
p
e
c
t
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
f
l
e
x
-
s
t
a
r
t
"
,
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
v
G
o
o
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
w
-
4
 
h
-
4
 
s
h
r
i
n
k
-
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
 
c
o
l
o
r
:
 
O
U
T
_
C
O
L
O
R
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
 
2
 
}
}
 
/
>
 
:
 
<
X
 
c
l
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
 
s
h
r
i
n
k
-
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
 
c
o
l
o
r
:
 
S
D
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
 
2
 
}
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
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
4
5
 
}
}
>
{
r
.
v
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
f
l
e
x
-
s
t
a
r
t
"
,
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
h
G
o
o
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
w
-
4
 
h
-
4
 
s
h
r
i
n
k
-
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
 
c
o
l
o
r
:
 
O
U
T
_
C
O
L
O
R
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
 
2
 
}
}
 
/
>
 
:
 
<
X
 
c
l
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
 
s
h
r
i
n
k
-
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
 
c
o
l
o
r
:
 
S
D
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
 
2
 
}
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
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
4
5
 
}
}
>
{
r
.
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
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
n
 
t
o
 
p
i
c
k
 
w
h
i
c
h
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
D
e
c
i
s
i
o
n
s
(
)
 
{


 
 
c
o
n
s
t
 
c
a
s
e
s
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
s
c
e
n
a
r
i
o
:
 
"
I
n
t
e
r
n
a
l
 
a
d
m
i
n
 
d
a
s
h
b
o
a
r
d
 
u
s
e
d
 
b
y
 
5
0
 
e
m
p
l
o
y
e
e
s
"
,


 
 
 
 
 
 
c
h
o
i
c
e
:
 
"
V
e
r
t
i
c
a
l
"
,


 
 
 
 
 
 
c
o
l
o
r
:
 
U
P
_
C
O
L
O
R
,


 
 
 
 
 
 
w
h
y
:
 
"
L
o
a
d
 
i
s
 
s
m
a
l
l
 
a
n
d
 
b
o
u
n
d
e
d
.
 
S
i
m
p
l
e
r
 
w
i
n
s
.
 
O
n
e
 
b
i
g
g
e
r
 
b
o
x
 
=
 
l
e
s
s
 
o
p
s
 
c
o
m
p
l
e
x
i
t
y
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
c
e
n
a
r
i
o
:
 
"
C
o
n
s
u
m
e
r
 
a
p
p
 
t
a
r
g
e
t
i
n
g
 
1
0
M
 
D
A
U
 
w
i
t
h
 
v
i
r
a
l
 
g
r
o
w
t
h
"
,


 
 
 
 
 
 
c
h
o
i
c
e
:
 
"
H
o
r
i
z
o
n
t
a
l
"
,


 
 
 
 
 
 
c
o
l
o
r
:
 
O
U
T
_
C
O
L
O
R
,


 
 
 
 
 
 
w
h
y
:
 
"
U
n
b
o
u
n
d
e
d
 
u
p
s
i
d
e
.
 
T
h
e
 
c
e
i
l
i
n
g
 
w
i
l
l
 
b
i
t
e
 
w
i
t
h
i
n
 
a
 
y
e
a
r
.
 
A
l
s
o
:
 
o
n
e
 
b
o
x
 
=
 
s
i
n
g
l
e
 
p
o
i
n
t
 
o
f
 
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


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
c
e
n
a
r
i
o
:
 
"
R
e
l
a
t
i
o
n
a
l
 
D
B
 
p
r
i
m
a
r
y
 
(
w
r
i
t
e
s
)
"
,


 
 
 
 
 
 
c
h
o
i
c
e
:
 
"
V
e
r
t
i
c
a
l
 
f
i
r
s
t
"
,


 
 
 
 
 
 
c
o
l
o
r
:
 
U
P
_
C
O
L
O
R
,


 
 
 
 
 
 
w
h
y
:
 
"
W
r
i
t
e
s
 
a
r
e
 
h
a
r
d
 
t
o
 
s
h
a
r
d
 
c
o
r
r
e
c
t
l
y
.
 
M
o
s
t
 
t
e
a
m
s
 
s
c
a
l
e
 
p
r
i
m
a
r
i
e
s
 
v
e
r
t
i
c
a
l
l
y
 
a
n
d
 
s
c
a
l
e
 
r
e
a
d
s
 
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
l
y
 
v
i
a
 
r
e
p
l
i
c
a
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
c
e
n
a
r
i
o
:
 
"
S
t
a
t
e
l
e
s
s
 
A
P
I
 
l
a
y
e
r
 
(
a
u
t
h
,
 
f
e
e
d
,
 
s
e
a
r
c
h
)
"
,


 
 
 
 
 
 
c
h
o
i
c
e
:
 
"
H
o
r
i
z
o
n
t
a
l
"
,


 
 
 
 
 
 
c
o
l
o
r
:
 
O
U
T
_
C
O
L
O
R
,


 
 
 
 
 
 
w
h
y
:
 
"
N
o
 
l
o
c
a
l
 
s
t
a
t
e
 
=
 
a
n
y
 
b
o
x
 
c
a
n
 
s
e
r
v
e
 
a
n
y
 
r
e
q
u
e
s
t
.
 
C
l
a
s
s
i
c
 
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
 
w
i
n
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
c
e
n
a
r
i
o
:
 
"
L
e
g
a
c
y
 
m
o
n
o
l
i
t
h
 
w
i
t
h
 
i
n
-
m
e
m
o
r
y
 
s
e
s
s
i
o
n
 
s
t
a
t
e
"
,


 
 
 
 
 
 
c
h
o
i
c
e
:
 
"
V
e
r
t
i
c
a
l
 
(
t
e
m
p
o
r
a
r
i
l
y
)
"
,


 
 
 
 
 
 
c
o
l
o
r
:
 
U
P
_
C
O
L
O
R
,


 
 
 
 
 
 
w
h
y
:
 
"
U
n
t
i
l
 
y
o
u
 
e
x
t
e
r
n
a
l
i
z
e
 
t
h
e
 
s
e
s
s
i
o
n
 
s
t
o
r
e
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
 
w
i
l
l
 
b
r
e
a
k
 
l
o
g
i
n
s
.
 
S
c
a
l
e
 
u
p
 
w
h
i
l
e
 
y
o
u
 
f
i
x
 
s
t
a
t
e
l
e
s
s
-
n
e
s
s
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
e
n
 
y
o
u
&
r
s
q
u
o
;
d
 
a
c
t
u
a
l
l
y
 
p
i
c
k
 
e
a
c
h
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


 
 
 
 
 
 
 
 
T
h
e
 
q
u
e
s
t
i
o
n
 
i
s
 
n
e
v
e
r
 
&
l
d
q
u
o
;
w
h
i
c
h
 
i
s
 
b
e
t
t
e
r
&
r
d
q
u
o
;
 
-
 
i
t
&
r
s
q
u
o
;
s
 
&
l
d
q
u
o
;
w
h
i
c
h
 
f
i
t
s


 
 
 
 
 
 
 
 
<
e
m
>
 
t
h
i
s
<
/
e
m
>
 
p
r
o
b
l
e
m
.
&
r
d
q
u
o
;
 
H
e
r
e
 
a
r
e
 
5
 
s
c
e
n
a
r
i
o
s
 
a
 
s
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
 
w
o
u
l
d
 
d
e
c
i
d
e
 
i
n


 
 
 
 
 
 
 
 
a
b
o
u
t
 
1
0
 
s
e
c
o
n
d
s
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
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
c
a
s
e
s
.
m
a
p
(
(
c
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
f
r
 
1
4
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
2
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
:
 
`
1
.
5
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
.
c
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
c
.
c
o
l
o
r
}
0
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
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
9
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
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
s
c
e
n
a
r
i
o
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
5
 
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
 
c
.
c
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
0
.
0
5
e
m
"
 
}
}
>
W
H
Y
 
·
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
w
h
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
 
c
.
c
o
l
o
r
,
 
c
o
l
o
r
:
 
"
#
f
f
f
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
0
5
e
m
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
c
h
o
i
c
e
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
2
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
 
`
1
.
5
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
 
S
D
_
S
O
F
T
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
f
l
e
x
-
s
t
a
r
t
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
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
5
 
h
-
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
 
S
D
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
 
2
 
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


 
 
 
 
 
 
 
 
 
 
<
b
>
S
e
n
i
o
r
 
r
u
l
e
 
o
f
 
t
h
u
m
b
:
<
/
b
>
 
s
c
a
l
e
 
v
e
r
t
i
c
a
l
l
y
 
u
n
t
i
l
 
i
t
 
h
u
r
t
s
,
 
t
h
e
n
 
g
o
 
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
.
 
W
h
y
?


 
 
 
 
 
 
 
 
 
 
B
e
c
a
u
s
e
 
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
 
a
d
d
s
 
c
o
m
p
l
e
x
i
t
y
 
f
o
r
e
v
e
r
 
-
 
t
h
e
 
m
o
m
e
n
t
 
y
o
u
 
c
o
m
m
i
t
,
 
y
o
u
 
n
o
w
 
o
w
n


 
 
 
 
 
 
 
 
 
 
d
e
p
l
o
y
m
e
n
t
s
,
 
c
o
o
r
d
i
n
a
t
i
o
n
,
 
a
n
d
 
s
t
a
t
e
 
e
x
t
e
r
n
a
l
i
z
a
t
i
o
n
.
 
D
o
n
&
r
s
q
u
o
;
t
 
p
a
y
 
t
h
a
t
 
p
r
i
c
e
 
b
e
f
o
r
e


 
 
 
 
 
 
 
 
 
 
y
o
u
 
h
a
v
e
 
t
o
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
 
 
M
A
I
N
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
_
S
c
a
l
i
n
g
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
c
m
p
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
a
m
e
 
L
o
a
d
,
 
T
w
o
 
W
a
y
s
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
C
o
m
p
a
r
e
 
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
a
d
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
T
r
a
d
e
o
f
f
s
"
,
 
i
c
o
n
:
 
<
G
i
t
C
o
m
p
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
a
d
e
o
f
f
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
p
i
c
k
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
n
 
t
o
 
P
i
c
k
 
W
h
i
c
h
"
,
 
i
c
o
n
:
 
<
T
r
e
n
d
i
n
g
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
D
e
c
i
s
i
o
n
s
 
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
W
h
a
t
 
i
s
 
v
e
r
t
i
c
a
l
 
s
c
a
l
i
n
g
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
d
d
i
n
g
 
m
o
r
e
 
s
e
r
v
e
r
s
 
b
e
h
i
n
d
 
a
 
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
,


 
 
 
 
 
 
 
 
"
G
i
v
i
n
g
 
o
n
e
 
s
e
r
v
e
r
 
m
o
r
e
 
C
P
U
 
/
 
R
A
M
 
/
 
d
i
s
k
"
,


 
 
 
 
 
 
 
 
"
S
p
l
i
t
t
i
n
g
 
t
h
e
 
d
a
t
a
b
a
s
e
 
i
n
t
o
 
s
h
a
r
d
s
"
,


 
 
 
 
 
 
 
 
"
M
o
v
i
n
g
 
t
o
 
t
h
e
 
c
l
o
u
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
V
e
r
t
i
c
a
l
 
=
 
u
p
.
 
H
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
 
o
u
t
.
 
Y
o
u
 
u
p
g
r
a
d
e
 
t
h
e
 
s
i
n
g
l
e
 
b
o
x
 
v
s
 
a
d
d
i
n
g
 
m
o
r
e
 
b
o
x
e
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
c
a
l
i
n
g
 
a
p
p
r
o
a
c
h
 
h
a
s
 
a
 
h
a
r
d
 
c
e
i
l
i
n
g
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
H
o
r
i
z
o
n
t
a
l
"
,
 
"
V
e
r
t
i
c
a
l
"
,
 
"
B
o
t
h
,
 
e
q
u
a
l
l
y
"
,
 
"
N
e
i
t
h
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
V
e
r
t
i
c
a
l
 
i
s
 
b
o
u
n
d
e
d
 
b
y
 
t
h
e
 
b
i
g
g
e
s
t
 
m
a
c
h
i
n
e
 
m
o
n
e
y
 
c
a
n
 
b
u
y
.
 
H
o
r
i
z
o
n
t
a
l
 
i
s
 
p
r
a
c
t
i
c
a
l
l
y
 
u
n
b
o
u
n
d
e
d
 
-
 
a
d
d
 
m
o
r
e
 
b
o
x
e
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
T
h
e
 
#
1
 
r
e
a
s
o
n
 
t
e
a
m
s
 
p
r
e
f
e
r
 
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
 
a
t
 
s
c
a
l
e
 
i
s
:
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
I
t
'
s
 
c
h
e
a
p
e
r
 
f
o
r
 
s
m
a
l
l
 
a
p
p
s
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
s
i
m
p
l
e
r
 
t
o
 
c
o
d
e
.
"
,


 
 
 
 
 
 
 
 
"
N
o
 
s
i
n
g
l
e
 
p
o
i
n
t
 
o
f
 
f
a
i
l
u
r
e
 
+
 
n
e
a
r
-
l
i
n
e
a
r
 
c
o
s
t
 
c
u
r
v
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
d
o
e
s
n
'
t
 
n
e
e
d
 
a
 
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
H
i
g
h
 
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
 
+
 
p
r
e
d
i
c
t
a
b
l
e
 
c
o
s
t
 
s
c
a
l
i
n
g
.
 
O
n
e
 
b
o
x
 
c
a
n
 
d
i
e
 
-
 
t
h
e
 
o
t
h
e
r
 
N
 
k
e
e
p
 
s
e
r
v
i
n
g
.
 
A
n
d
 
y
o
u
 
p
a
y
 
r
o
u
g
h
l
y
 
p
r
o
p
o
r
t
i
o
n
a
l
l
y
 
t
o
 
l
o
a
d
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
e
r
v
i
c
e
 
i
s
 
h
a
r
d
e
s
t
 
t
o
 
s
c
a
l
e
 
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
l
y
 
w
i
t
h
o
u
t
 
e
x
t
r
a
 
w
o
r
k
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
 
s
t
a
t
e
l
e
s
s
 
R
E
S
T
 
A
P
I
"
,


 
 
 
 
 
 
 
 
"
A
 
s
t
a
t
i
c
 
w
e
b
s
i
t
e
 
o
n
 
a
 
C
D
N
"
,


 
 
 
 
 
 
 
 
"
A
 
r
e
l
a
t
i
o
n
a
l
 
d
a
t
a
b
a
s
e
 
h
a
n
d
l
i
n
g
 
w
r
i
t
e
s
 
(
p
r
i
m
a
r
y
)
"
,


 
 
 
 
 
 
 
 
"
A
 
w
o
r
k
e
r
 
c
o
n
s
u
m
i
n
g
 
f
r
o
m
 
a
 
q
u
e
u
e
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
W
r
i
t
e
-
h
e
a
v
y
 
p
r
i
m
a
r
y
 
d
a
t
a
b
a
s
e
s
 
a
r
e
 
h
a
r
d
 
t
o
 
s
h
a
r
d
 
c
o
r
r
e
c
t
l
y
.
 
M
o
s
t
 
t
e
a
m
s
 
s
c
a
l
e
 
p
r
i
m
a
r
i
e
s
 
v
e
r
t
i
c
a
l
l
y
 
a
n
d
 
s
c
a
l
e
 
r
e
a
d
s
 
v
i
a
 
r
e
p
l
i
c
a
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
S
e
n
i
o
r
 
r
u
l
e
 
o
f
 
t
h
u
m
b
:
 
w
h
e
n
 
s
h
o
u
l
d
 
y
o
u
 
g
o
 
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
I
m
m
e
d
i
a
t
e
l
y
 
-
 
i
t
'
s
 
a
l
w
a
y
s
 
b
e
t
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
N
e
v
e
r
 
-
 
s
t
a
y
 
v
e
r
t
i
c
a
l
 
f
o
r
e
v
e
r
.
"
,


 
 
 
 
 
 
 
 
"
S
c
a
l
e
 
v
e
r
t
i
c
a
l
l
y
 
u
n
t
i
l
 
i
t
 
h
u
r
t
s
;
 
t
h
e
n
 
g
o
 
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
 
w
h
e
n
 
y
o
u
 
m
u
s
t
.
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
i
f
 
t
h
e
 
C
E
O
 
a
s
k
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
H
o
r
i
z
o
n
t
a
l
 
a
d
d
s
 
p
e
r
m
a
n
e
n
t
 
c
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
d
e
p
l
o
y
s
,
 
c
o
o
r
d
i
n
a
t
i
o
n
,
 
s
t
a
t
e
l
e
s
s
n
e
s
s
)
.
 
D
o
n
'
t
 
p
a
y
 
t
h
a
t
 
c
o
s
t
 
u
n
t
i
l
 
y
o
u
 
h
a
v
e
 
t
o
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
V
e
r
t
i
c
a
l
 
v
s
 
H
o
r
i
z
o
n
t
a
l
 
S
c
a
l
i
n
g
"


 
 
 
 
 
 
l
e
v
e
l
=
{
2
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
3
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
D
e
c
i
d
e
s
 
t
h
e
 
s
h
a
p
e
 
o
f
 
e
v
e
r
y
 
c
a
p
a
c
i
t
y
-
p
l
a
n
n
i
n
g
 
d
i
s
c
u
s
s
i
o
n
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


