
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
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
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
,
 
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
o
o
k
O
p
e
n
,
 
G
l
o
b
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
k
u
l
l
,
 
Z
a
p
 
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




c
o
n
s
t
 
S
D
 
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
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
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
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
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
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
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
9
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
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
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
5
,


}
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
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
f
i
n
i
t
i
o
n
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
B
r
e
a
k
 
i
t
 
o
n
 
p
u
r
p
o
s
e
.
 
F
i
n
d
 
o
u
t
 
b
e
f
o
r
e
 
u
s
e
r
s
 
d
o
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


 
 
 
 
 
 
 
 
<
b
>
C
h
a
o
s
 
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
<
/
b
>
 
i
s
 
t
h
e
 
p
r
a
c
t
i
c
e
 
o
f
 
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
 
i
n
j
e
c
t
i
n
g
 
f
a
i
l
u
r
e
s
 
i
n
t
o
 
a
 
r
u
n
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
 
t
o
 
t
e
s
t
 
t
h
a
t
 
t
h
e
 
r
e
s
i
l
i
e
n
c
e
 
p
a
t
t
e
r
n
s
 
(
c
i
r
c
u
i
t
 
b
r
e
a
k
e
r
s
,
 
r
e
t
r
i
e
s
,
 
b
u
l
k
h
e
a
d
s
,


 
 
 
 
 
 
 
 
g
r
a
c
e
f
u
l
 
s
h
u
t
d
o
w
n
)
 
a
c
t
u
a
l
l
y
 
w
o
r
k
.
 
P
i
o
n
e
e
r
e
d
 
b
y
 
N
e
t
f
l
i
x
 
w
i
t
h
 
<
b
>
C
h
a
o
s
 
M
o
n
k
e
y
<
/
b
>
,
 
w
h
i
c
h


 
 
 
 
 
 
 
 
r
a
n
d
o
m
l
y
 
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
 
i
n
s
t
a
n
c
e
s
 
d
u
r
i
n
g
 
b
u
s
i
n
e
s
s
 
h
o
u
r
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
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
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
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
1
 
}
 
}
 
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
3
 
m
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
H
y
p
o
t
h
e
s
i
z
e
"
,
 
v
:
 
"
P
r
e
d
i
c
t
 
t
h
e
 
s
t
e
a
d
y
 
s
t
a
t
e
.
 
'
K
i
l
l
i
n
g
 
o
n
e
 
c
a
r
t
-
s
e
r
v
i
c
e
 
p
o
d
 
w
o
n
'
t
 
d
r
o
p
 
r
e
q
u
e
s
t
s
 
a
b
o
v
e
 
0
.
1
%
.
'
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
I
n
j
e
c
t
"
,
 
v
:
 
"
R
u
n
 
t
h
e
 
e
x
p
e
r
i
m
e
n
t
 
i
n
 
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
 
(
o
r
 
s
t
a
g
i
n
g
 
t
h
a
t
 
m
i
r
r
o
r
s
 
i
t
)
.
 
K
i
l
l
 
a
 
p
o
d
,
 
s
e
v
e
r
 
a
 
n
e
t
w
o
r
k
,
 
s
l
o
w
 
a
 
d
i
s
k
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
V
e
r
i
f
y
"
,
 
v
:
 
"
C
o
m
p
a
r
e
 
a
c
t
u
a
l
 
t
o
 
h
y
p
o
t
h
e
s
i
s
.
 
I
f
 
r
e
a
l
i
t
y
 
i
s
 
w
o
r
s
e
,
 
y
o
u
'
v
e
 
f
o
u
n
d
 
a
 
m
i
s
s
i
n
g
 
r
e
s
i
l
i
e
n
c
e
 
p
a
t
t
e
r
n
.
"
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
c
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
c
.
k
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
{
 
h
i
d
d
e
n
:
 
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
0
 
}
,
 
v
i
s
i
b
l
e
:
 
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
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
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
{
c
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
N
e
t
f
l
i
x
 
C
h
a
o
s
 
M
o
n
k
e
y
<
/
b
>
 
k
i
l
l
s
 
r
a
n
d
o
m
 
E
C
2
 
i
n
s
t
a
n
c
e
s
 
d
u
r
i
n
g
 
b
u
s
i
n
e
s
s
 
h
o
u
r
s
.
 
<
b
>
C
h
a
o
s


 
 
 
 
 
 
 
 
 
 
M
e
s
h
<
/
b
>
 
a
n
d
 
<
b
>
L
i
t
m
u
s
<
/
b
>
 
b
r
i
n
g
 
t
h
e
 
s
a
m
e
 
t
o
 
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
 
<
b
>
G
r
e
m
l
i
n
<
/
b
>
 
i
s
 
t
h
e


 
 
 
 
 
 
 
 
 
 
c
o
m
m
e
r
c
i
a
l
 
o
f
f
e
r
i
n
g
.
 
<
b
>
A
W
S
 
F
a
u
l
t
 
I
n
j
e
c
t
i
o
n
 
S
i
m
u
l
a
t
o
r
<
/
b
>
 
s
h
i
p
s
 
m
a
n
a
g
e
d
 
c
h
a
o
s
 
f
o
r


 
 
 
 
 
 
 
 
 
 
A
W
S
.
 
T
h
e
 
w
h
o
l
e
 
p
o
i
n
t
:
 
d
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
 
w
a
i
t
 
f
o
r
 
a
 
3
 
A
M
 
p
a
g
e
 
t
o
 
f
i
n
d
 
o
u
t
 
y
o
u
r
 
f
a
l
l
b
a
c
k
s
 
d
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


 
 
 
 
 
 
 
 
 
 
w
o
r
k
 
—
 
f
i
n
d
 
o
u
t
 
a
t
 
2
 
P
M
 
w
i
t
h
 
t
h
e
 
t
e
a
m
 
i
n
 
t
h
e
 
r
o
o
m
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
 
C
l
i
c
k
-
t
o
-
b
r
e
a
k
 
p
l
a
y
g
r
o
u
n
d
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




t
y
p
e
 
N
o
d
e
I
d
 
=
 
"
l
b
"
 
|
 
"
a
p
i
1
"
 
|
 
"
a
p
i
2
"
 
|
 
"
a
p
i
3
"
 
|
 
"
c
a
c
h
e
"
 
|
 
"
d
b
"
 
|
 
"
a
u
t
h
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
 
N
o
d
e
 
{


 
 
i
d
:
 
N
o
d
e
I
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
;


 
 
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


 
 
k
i
n
d
:
 
"
l
b
"
 
|
 
"
a
p
i
"
 
|
 
"
c
a
c
h
e
"
 
|
 
"
d
b
"
 
|
 
"
a
u
t
h
"
;


}




c
o
n
s
t
 
N
O
D
E
S
:
 
N
o
d
e
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
b
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
o
a
d
 
B
a
l
a
n
c
e
r
"
,
 
x
:
 
6
0
,
 
y
:
 
1
6
0
,
 
k
i
n
d
:
 
"
l
b
"
 
}
,


 
 
{
 
i
d
:
 
"
a
p
i
1
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
P
I
 
·
 
1
"
,
 
x
:
 
2
4
0
,
 
y
:
 
6
0
,
 
k
i
n
d
:
 
"
a
p
i
"
 
}
,


 
 
{
 
i
d
:
 
"
a
p
i
2
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
P
I
 
·
 
2
"
,
 
x
:
 
2
4
0
,
 
y
:
 
1
6
0
,
 
k
i
n
d
:
 
"
a
p
i
"
 
}
,


 
 
{
 
i
d
:
 
"
a
p
i
3
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
P
I
 
·
 
3
"
,
 
x
:
 
2
4
0
,
 
y
:
 
2
6
0
,
 
k
i
n
d
:
 
"
a
p
i
"
 
}
,


 
 
{
 
i
d
:
 
"
a
u
t
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
A
u
t
h
"
,
 
x
:
 
4
4
0
,
 
y
:
 
6
0
,
 
k
i
n
d
:
 
"
a
u
t
h
"
 
}
,


 
 
{
 
i
d
:
 
"
c
a
c
h
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
C
a
c
h
e
"
,
 
x
:
 
4
4
0
,
 
y
:
 
1
6
0
,
 
k
i
n
d
:
 
"
c
a
c
h
e
"
 
}
,


 
 
{
 
i
d
:
 
"
d
b
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
a
t
a
b
a
s
e
"
,
 
x
:
 
4
4
0
,
 
y
:
 
2
6
0
,
 
k
i
n
d
:
 
"
d
b
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
 
E
D
G
E
S
:
 
[
N
o
d
e
I
d
,
 
N
o
d
e
I
d
]
[
]
 
=
 
[


 
 
[
"
l
b
"
,
 
"
a
p
i
1
"
]
,
 
[
"
l
b
"
,
 
"
a
p
i
2
"
]
,
 
[
"
l
b
"
,
 
"
a
p
i
3
"
]
,


 
 
[
"
a
p
i
1
"
,
 
"
a
u
t
h
"
]
,
 
[
"
a
p
i
2
"
,
 
"
a
u
t
h
"
]
,
 
[
"
a
p
i
3
"
,
 
"
a
u
t
h
"
]
,


 
 
[
"
a
p
i
1
"
,
 
"
c
a
c
h
e
"
]
,
 
[
"
a
p
i
2
"
,
 
"
c
a
c
h
e
"
]
,
 
[
"
a
p
i
3
"
,
 
"
c
a
c
h
e
"
]
,


 
 
[
"
a
p
i
1
"
,
 
"
d
b
"
]
,
 
[
"
a
p
i
2
"
,
 
"
d
b
"
]
,
 
[
"
a
p
i
3
"
,
 
"
d
b
"
]
,


]
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
 
F
a
i
l
u
r
e
 
{


 
 
t
y
p
e
:
 
"
n
o
d
e
"
 
|
 
"
e
d
g
e
"
;


 
 
t
a
r
g
e
t
:
 
s
t
r
i
n
g
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
 
C
h
a
o
s
P
l
a
y
g
r
o
u
n
d
(
)
 
{


 
 
c
o
n
s
t
 
[
f
a
i
l
u
r
e
s
,
 
s
e
t
F
a
i
l
u
r
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
F
a
i
l
u
r
e
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
t
i
c
k
,
 
s
e
t
T
i
c
k
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




 
 
/
/
 
S
y
s
t
e
m
 
h
e
a
l
t
h
 
c
o
m
p
u
t
a
t
i
o
n


 
 
c
o
n
s
t
 
i
s
N
o
d
e
D
e
a
d
 
=
 
(
i
d
:
 
N
o
d
e
I
d
)
 
=
>
 
f
a
i
l
u
r
e
s
.
s
o
m
e
(
(
f
)
 
=
>
 
f
.
t
y
p
e
 
=
=
=
 
"
n
o
d
e
"
 
&
&
 
f
.
t
a
r
g
e
t
 
=
=
=
 
i
d
)
;


 
 
c
o
n
s
t
 
i
s
E
d
g
e
D
e
a
d
 
=
 
(
a
:
 
N
o
d
e
I
d
,
 
b
:
 
N
o
d
e
I
d
)
 
=
>


 
 
 
 
f
a
i
l
u
r
e
s
.
s
o
m
e
(


 
 
 
 
 
 
(
f
)
 
=
>


 
 
 
 
 
 
 
 
f
.
t
y
p
e
 
=
=
=
 
"
e
d
g
e
"
 
&
&


 
 
 
 
 
 
 
 
(
f
.
t
a
r
g
e
t
 
=
=
=
 
`
$
{
a
}
-
$
{
b
}
`
 
|
|
 
f
.
t
a
r
g
e
t
 
=
=
=
 
`
$
{
b
}
-
$
{
a
}
`
)
,


 
 
 
 
)
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
A
p
i
s
 
=
 
(
[
"
a
p
i
1
"
,
 
"
a
p
i
2
"
,
 
"
a
p
i
3
"
]
 
a
s
 
N
o
d
e
I
d
[
]
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
i
d
)
 
=
>
 
!
i
s
N
o
d
e
D
e
a
d
(
i
d
)
 
&
&
 
!
i
s
E
d
g
e
D
e
a
d
(
"
l
b
"
,
 
i
d
)
)
;


 
 
c
o
n
s
t
 
d
b
R
e
a
c
h
a
b
l
e
 
=
 
!
i
s
N
o
d
e
D
e
a
d
(
"
d
b
"
)
 
&
&
 
l
i
v
e
A
p
i
s
.
s
o
m
e
(
(
i
d
)
 
=
>
 
!
i
s
E
d
g
e
D
e
a
d
(
i
d
,
 
"
d
b
"
)
)
;


 
 
c
o
n
s
t
 
a
u
t
h
R
e
a
c
h
a
b
l
e
 
=
 
!
i
s
N
o
d
e
D
e
a
d
(
"
a
u
t
h
"
)
 
&
&
 
l
i
v
e
A
p
i
s
.
s
o
m
e
(
(
i
d
)
 
=
>
 
!
i
s
E
d
g
e
D
e
a
d
(
i
d
,
 
"
a
u
t
h
"
)
)
;


 
 
c
o
n
s
t
 
c
a
c
h
e
R
e
a
c
h
a
b
l
e
 
=
 
!
i
s
N
o
d
e
D
e
a
d
(
"
c
a
c
h
e
"
)
 
&
&
 
l
i
v
e
A
p
i
s
.
s
o
m
e
(
(
i
d
)
 
=
>
 
!
i
s
E
d
g
e
D
e
a
d
(
i
d
,
 
"
c
a
c
h
e
"
)
)
;




 
 
c
o
n
s
t
 
l
b
D
e
a
d
 
=
 
i
s
N
o
d
e
D
e
a
d
(
"
l
b
"
)
;


 
 
c
o
n
s
t
 
o
v
e
r
a
l
l
S
t
a
t
u
s
:
 
"
o
k
"
 
|
 
"
d
e
g
r
a
d
e
d
"
 
|
 
"
d
o
w
n
"
 
=


 
 
 
 
l
b
D
e
a
d
 
|
|
 
l
i
v
e
A
p
i
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
 
|
|
 
!
a
u
t
h
R
e
a
c
h
a
b
l
e
 
|
|
 
!
d
b
R
e
a
c
h
a
b
l
e


 
 
 
 
 
 
?
 
"
d
o
w
n
"


 
 
 
 
 
 
:
 
!
c
a
c
h
e
R
e
a
c
h
a
b
l
e
 
|
|
 
l
i
v
e
A
p
i
s
.
l
e
n
g
t
h
 
<
 
3


 
 
 
 
 
 
 
 
?
 
"
d
e
g
r
a
d
e
d
"


 
 
 
 
 
 
 
 
:
 
"
o
k
"
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
N
o
d
e
 
=
 
(
i
d
:
 
N
o
d
e
I
d
)
 
=
>
 
{


 
 
 
 
i
f
 
(
f
a
i
l
u
r
e
s
.
s
o
m
e
(
(
f
)
 
=
>
 
f
.
t
y
p
e
 
=
=
=
 
"
n
o
d
e
"
 
&
&
 
f
.
t
a
r
g
e
t
 
=
=
=
 
i
d
)
)
 
{


 
 
 
 
 
 
s
e
t
F
a
i
l
u
r
e
s
(
f
a
i
l
u
r
e
s
.
f
i
l
t
e
r
(
(
f
)
 
=
>
 
!
(
f
.
t
y
p
e
 
=
=
=
 
"
n
o
d
e
"
 
&
&
 
f
.
t
a
r
g
e
t
 
=
=
=
 
i
d
)
)
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
s
e
t
F
a
i
l
u
r
e
s
(
[
.
.
.
f
a
i
l
u
r
e
s
,
 
{
 
t
y
p
e
:
 
"
n
o
d
e
"
,
 
t
a
r
g
e
t
:
 
i
d
 
}
]
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
E
d
g
e
 
=
 
(
a
:
 
N
o
d
e
I
d
,
 
b
:
 
N
o
d
e
I
d
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
`
$
{
a
}
-
$
{
b
}
`
;


 
 
 
 
c
o
n
s
t
 
e
x
i
s
t
i
n
g
 
=
 
f
a
i
l
u
r
e
s
.
f
i
n
d
(
(
f
)
 
=
>
 
f
.
t
y
p
e
 
=
=
=
 
"
e
d
g
e
"
 
&
&
 
(
f
.
t
a
r
g
e
t
 
=
=
=
 
k
e
y
 
|
|
 
f
.
t
a
r
g
e
t
 
=
=
=
 
`
$
{
b
}
-
$
{
a
}
`
)
)
;


 
 
 
 
i
f
 
(
e
x
i
s
t
i
n
g
)
 
{


 
 
 
 
 
 
s
e
t
F
a
i
l
u
r
e
s
(
f
a
i
l
u
r
e
s
.
f
i
l
t
e
r
(
(
f
)
 
=
>
 
f
 
!
=
=
 
e
x
i
s
t
i
n
g
)
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
s
e
t
F
a
i
l
u
r
e
s
(
[
.
.
.
f
a
i
l
u
r
e
s
,
 
{
 
t
y
p
e
:
 
"
e
d
g
e
"
,
 
t
a
r
g
e
t
:
 
k
e
y
 
}
]
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
s
e
t
F
a
i
l
u
r
e
s
(
[
]
)
;




 
 
/
/
 
t
i
c
k
 
t
o
 
d
r
i
v
e
 
p
a
c
k
e
t
 
a
n
i
m
a
t
i
o
n
s


 
 
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


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
 
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
 
s
e
t
T
i
c
k
(
(
t
)
 
=
>
 
t
 
+
 
1
)
,
 
1
1
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
h
a
n
d
l
e
)
;


 
 
}
,
 
[
]
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
C
l
i
c
k
 
a
n
y
 
n
o
d
e
 
o
r
 
e
d
g
e
 
t
o
 
b
r
e
a
k
 
i
t
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


 
 
 
 
 
 
 
 
A
 
7
-
n
o
d
e
 
s
y
s
t
e
m
:
 
L
B
 
→
 
3
 
A
P
I
s
 
→
 
a
u
t
h
 
+
 
c
a
c
h
e
 
+
 
d
b
.
 
C
l
i
c
k
 
a
n
y
 
n
o
d
e
 
t
o
 
t
a
k
e
 
i
t
 
d
o
w
n
.
 
C
l
i
c
k


 
 
 
 
 
 
 
 
a
n
y
 
e
d
g
e
 
t
o
 
s
e
v
e
r
 
t
h
e
 
n
e
t
w
o
r
k
 
b
e
t
w
e
e
n
 
t
w
o
 
n
o
d
e
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
 
o
v
e
r
a
l
l
 
s
t
a
t
u
s
 
f
l
i
p
 
a
n
d
 
t
h
e


 
 
 
 
 
 
 
 
r
e
d
 
s
t
r
i
k
e
s
 
a
p
p
e
a
r
.
 
B
u
i
l
d
 
y
o
u
r
 
i
n
t
u
i
t
i
o
n
 
f
o
r
 
w
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
 
r
e
d
u
n
d
a
n
t
 
a
n
d
 
w
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
 
a
 
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
 
p
a
d
d
i
n
g
:
 
2
2
 
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
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
o
k
"
 
?
 
S
D
 
:
 
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
d
e
g
r
a
d
e
d
"
 
?
 
W
A
R
N
 
:
 
"
#
d
c
2
6
2
6
"
}
5
5
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
 
`
$
{
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
o
k
"
 
?
 
S
D
 
:
 
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
d
e
g
r
a
d
e
d
"
 
?
 
W
A
R
N
 
:
 
"
#
d
c
2
6
2
6
"
}
1
0
`
 
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
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
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
 
}
}
>
S
Y
S
T
E
M
 
S
T
A
T
U
S
<
/
s
p
a
n
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
 
m
o
d
e
=
"
w
a
i
t
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
o
v
e
r
a
l
l
S
t
a
t
u
s
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
3
8
0
,
 
d
a
m
p
i
n
g
:
 
2
2
 
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
2
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
 
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
o
k
"
 
?
 
S
D
 
:
 
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
d
e
g
r
a
d
e
d
"
 
?
 
W
A
R
N
 
:
 
"
#
d
c
2
6
2
6
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
o
k
"
 
?
 
"
✓
 
H
E
A
L
T
H
Y
"
 
:
 
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
d
e
g
r
a
d
e
d
"
 
?
 
"
⚠
 
D
E
G
R
A
D
E
D
"
 
:
 
"
✕
 
D
O
W
N
"
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
6
0
0
 
3
6
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
 
7
0
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
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
E
D
G
E
S
.
m
a
p
(
(
[
a
,
 
b
]
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
a
 
=
 
N
O
D
E
S
.
f
i
n
d
(
(
n
)
 
=
>
 
n
.
i
d
 
=
=
=
 
a
)
!
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
b
 
=
 
N
O
D
E
S
.
f
i
n
d
(
(
n
)
 
=
>
 
n
.
i
d
 
=
=
=
 
b
)
!
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
e
a
d
 
=
 
i
s
E
d
g
e
D
e
a
d
(
a
,
 
b
)
 
|
|
 
i
s
N
o
d
e
D
e
a
d
(
a
)
 
|
|
 
i
s
N
o
d
e
D
e
a
d
(
b
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
g
 
k
e
y
=
{
`
$
{
a
}
-
$
{
b
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
n
a
.
x
 
+
 
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
n
a
.
y
 
+
 
2
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
n
b
.
x
 
+
 
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
n
b
.
y
 
+
 
2
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
d
e
a
d
 
?
 
"
#
d
c
2
6
2
6
"
 
:
 
N
E
U
T
R
A
L
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
{
d
e
a
d
 
?
 
1
 
:
 
1
.
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
e
a
d
 
?
 
"
5
 
4
"
 
:
 
"
0
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
O
p
a
c
i
t
y
=
{
d
e
a
d
 
?
 
0
.
5
 
:
 
0
.
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
n
a
.
x
 
+
 
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
n
a
.
y
 
+
 
2
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
n
b
.
x
 
+
 
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
n
b
.
y
 
+
 
2
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
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
{
2
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
 
}
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
 
t
o
g
g
l
e
E
d
g
e
(
a
,
 
b
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
d
e
a
d
 
&
&
 
t
i
c
k
 
%
 
2
 
=
=
=
 
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
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
p
k
t
-
$
{
a
}
-
$
{
b
}
-
$
{
t
i
c
k
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
n
a
.
x
 
+
 
5
0
,
 
c
y
:
 
n
a
.
y
 
+
 
2
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
 
c
x
:
 
n
b
.
x
 
+
 
5
0
,
 
c
y
:
 
n
b
.
y
 
+
 
2
2
 
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
9
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
E
d
g
e
D
e
a
d
(
a
,
 
b
)
 
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
{
(
n
a
.
x
 
+
 
n
b
.
x
)
 
/
 
2
 
+
 
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
(
n
a
.
y
 
+
 
n
b
.
y
)
 
/
 
2
 
+
 
2
2
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
i
l
l
=
"
#
d
c
2
6
2
6
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
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
8
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
✕


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
)
}




 
 
 
 
 
 
 
 
 
 
{
N
O
D
E
S
.
m
a
p
(
(
n
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
e
a
d
 
=
 
i
s
N
o
d
e
D
e
a
d
(
n
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
d
e
a
d
 
?
 
"
#
d
c
2
6
2
6
"
 
:
 
k
i
n
d
C
o
l
o
r
(
n
.
k
i
n
d
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
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
n
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
n
.
x
}
,
 
$
{
n
.
y
}
)
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
 
}
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
 
t
o
g
g
l
e
N
o
d
e
(
n
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
d
e
a
d
 
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
{
1
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
4
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
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
2
5
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
 
0
,
 
s
c
a
l
e
:
 
1
.
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
 
1
.
6
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
1
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
4
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
e
a
d
 
?
 
"
4
 
3
"
 
:
 
"
0
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
=
{
d
e
a
d
 
?
 
0
.
6
 
:
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
}
 
y
=
{
2
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
{
1
1
}
 
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
{
7
0
0
}
 
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
 
o
p
a
c
i
t
y
=
{
d
e
a
d
 
?
 
0
.
5
 
:
 
1
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
a
d
 
?
 
`
✕
 
$
{
n
.
l
a
b
e
l
}
`
 
:
 
n
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
5
0
}
 
y
=
{
3
4
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
i
l
l
=
{
c
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
{
9
}
 
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
d
e
a
d
 
?
 
"
D
O
W
N
"
 
:
 
"
o
k
"
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
 
c
l
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
 
m
t
-
5
 
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
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
f
a
i
l
u
r
e
s
 
i
n
j
e
c
t
e
d
:
 
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
 
c
o
l
o
r
:
 
f
a
i
l
u
r
e
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
 
W
A
R
N
 
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
f
a
i
l
u
r
e
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
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
m
o
t
i
o
n
.
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
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
 
o
n
C
l
i
c
k
=
{
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
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


 
 
 
 
 
 
 
 
 
 
 
 
h
e
a
l
 
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


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
 
m
o
d
e
=
"
w
a
i
t
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
o
v
e
r
a
l
l
S
t
a
t
u
s
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
 
y
:
 
-
6
 
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
3
 
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
4
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
R
a
d
i
u
s
:
 
6
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
 
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
o
k
"
 
?
 
S
D
 
:
 
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
d
e
g
r
a
d
e
d
"
 
?
 
W
A
R
N
 
:
 
"
#
d
c
2
6
2
6
"
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
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
N
A
L
Y
S
I
S


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
o
k
"
 
&
&
 
"
A
l
l
 
r
e
q
u
i
r
e
d
 
s
e
r
v
i
c
e
s
 
r
e
a
c
h
a
b
l
e
.
 
T
h
e
 
3
 
A
P
I
s
 
g
i
v
e
 
r
e
d
u
n
d
a
n
c
y
 
—
 
k
i
l
l
 
o
n
e
 
a
n
d
 
t
h
e
 
o
t
h
e
r
 
t
w
o
 
p
i
c
k
 
u
p
 
t
h
e
 
s
l
a
c
k
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
d
e
g
r
a
d
e
d
"
 
&
&
 
"
C
a
c
h
e
 
i
s
 
d
o
w
n
 
o
r
 
o
n
l
y
 
s
o
m
e
 
A
P
I
s
 
a
r
e
 
a
l
i
v
e
.
 
S
e
r
v
i
c
e
 
s
t
i
l
l
 
w
o
r
k
s
 
b
u
t
 
s
l
o
w
e
r
 
/
 
m
o
r
e
 
D
B
 
l
o
a
d
.
 
T
h
i
s
 
i
s
 
w
h
a
t
 
'
d
e
g
r
a
d
e
d
'
 
l
o
o
k
s
 
l
i
k
e
 
i
n
 
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
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
o
v
e
r
a
l
l
S
t
a
t
u
s
 
=
=
=
 
"
d
o
w
n
"
 
&
&
 
"
A
 
r
e
q
u
i
r
e
d
 
d
e
p
e
n
d
e
n
c
y
 
i
s
 
u
n
r
e
a
c
h
a
b
l
e
:
 
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
,
 
a
l
l
 
A
P
I
s
,
 
a
u
t
h
,
 
o
r
 
D
B
.
 
T
h
e
 
s
y
s
t
e
m
 
c
a
n
'
t
 
s
e
r
v
e
 
u
s
e
r
s
 
u
n
t
i
l
 
t
h
i
s
 
h
e
a
l
s
.
"
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
 
k
i
n
d
C
o
l
o
r
(
k
:
 
N
o
d
e
[
"
k
i
n
d
"
]
)
:
 
s
t
r
i
n
g
 
{


 
 
s
w
i
t
c
h
 
(
k
)
 
{


 
 
 
 
c
a
s
e
 
"
l
b
"
:
 
r
e
t
u
r
n
 
S
D
;


 
 
 
 
c
a
s
e
 
"
a
p
i
"
:
 
r
e
t
u
r
n
 
S
D
;


 
 
 
 
c
a
s
e
 
"
a
u
t
h
"
:
 
r
e
t
u
r
n
 
P
U
R
P
L
E
;


 
 
 
 
c
a
s
e
 
"
c
a
c
h
e
"
:
 
r
e
t
u
r
n
 
W
A
R
N
;


 
 
 
 
c
a
s
e
 
"
d
b
"
:
 
r
e
t
u
r
n
 
S
D
;


 
 
}


}




f
u
n
c
t
i
o
n
 
b
t
n
(
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
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
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
o
l
o
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
 
`
$
{
c
o
l
o
r
}
1
8
`
,
 
c
o
l
o
r
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


 
 
}
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
 
R
e
a
l
 
c
h
a
o
s
 
e
x
p
e
r
i
m
e
n
t
s
 
t
o
 
r
u
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




c
o
n
s
t
 
E
X
P
E
R
I
M
E
N
T
S
 
=
 
[


 
 
{
 
k
:
 
"
K
i
l
l
 
a
 
r
a
n
d
o
m
 
p
o
d
"
,
 
w
h
a
t
:
 
"
T
e
s
t
s
 
t
h
a
t
 
t
h
e
 
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
 
h
a
s
 
m
u
l
t
i
p
l
e
 
r
e
p
l
i
c
a
s
 
a
n
d
 
t
h
e
 
L
B
 
r
e
m
o
v
e
s
 
f
a
i
l
e
d
 
o
n
e
s
 
q
u
i
c
k
l
y
.
"
 
}
,


 
 
{
 
k
:
 
"
A
d
d
 
2
0
0
m
s
 
l
a
t
e
n
c
y
 
t
o
 
o
n
e
 
d
o
w
n
s
t
r
e
a
m
"
,
 
w
h
a
t
:
 
"
T
e
s
t
s
 
c
i
r
c
u
i
t
 
b
r
e
a
k
e
r
s
 
+
 
t
i
m
e
o
u
t
s
 
+
 
r
e
t
r
y
 
p
o
l
i
c
i
e
s
 
o
n
 
t
h
e
 
c
a
l
l
e
r
.
"
 
}
,


 
 
{
 
k
:
 
"
D
r
o
p
 
5
%
 
o
f
 
n
e
t
w
o
r
k
 
p
a
c
k
e
t
s
 
b
e
t
w
e
e
n
 
A
Z
s
"
,
 
w
h
a
t
:
 
"
T
e
s
t
s
 
r
e
t
r
y
 
b
e
h
a
v
i
o
r
 
a
n
d
 
e
x
p
o
s
e
s
 
a
p
p
s
 
t
h
a
t
 
c
a
n
'
t
 
t
o
l
e
r
a
t
e
 
p
a
r
t
i
a
l
 
n
e
t
w
o
r
k
 
f
a
i
l
u
r
e
s
.
"
 
}
,


 
 
{
 
k
:
 
"
F
i
l
l
 
a
 
d
i
s
k
 
o
n
 
o
n
e
 
n
o
d
e
"
,
 
w
h
a
t
:
 
"
T
e
s
t
s
 
t
h
a
t
 
m
o
n
i
t
o
r
i
n
g
 
c
a
t
c
h
e
s
 
i
t
 
a
n
d
 
t
h
a
t
 
w
o
r
k
l
o
a
d
s
 
r
e
s
c
h
e
d
u
l
e
 
c
l
e
a
n
l
y
.
"
 
}
,


 
 
{
 
k
:
 
"
C
r
a
s
h
 
a
 
l
e
a
d
e
r
 
n
o
d
e
"
,
 
w
h
a
t
:
 
"
T
e
s
t
s
 
R
a
f
t
 
/
 
P
a
x
o
s
 
f
a
i
l
o
v
e
r
 
t
i
m
e
 
a
n
d
 
w
h
e
t
h
e
r
 
w
r
i
t
e
 
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
 
h
o
l
d
s
.
"
 
}
,


 
 
{
 
k
:
 
"
B
l
o
c
k
 
D
N
S
 
f
o
r
 
1
0
s
"
,
 
w
h
a
t
:
 
"
T
e
s
t
s
 
c
a
c
h
i
n
g
 
o
f
 
D
N
S
 
l
o
o
k
u
p
s
 
a
n
d
 
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
 
f
r
e
s
h
 
r
e
s
o
l
u
t
i
o
n
 
f
a
i
l
s
.
"
 
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
 
E
x
p
e
r
i
m
e
n
t
s
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
R
e
a
l
 
c
h
a
o
s
 
e
x
p
e
r
i
m
e
n
t
s
 
w
o
r
t
h
 
r
u
n
n
i
n
g
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
a
c
h
 
o
n
e
 
t
a
r
g
e
t
s
 
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
e
s
i
l
i
e
n
c
e
 
p
a
t
t
e
r
n
.
 
I
f
 
y
o
u
 
c
a
n
&
r
s
q
u
o
;
t
 
s
u
r
v
i
v
e
 
t
h
e
 
e
x
p
e
r
i
m
e
n
t
,
 
y
o
u


 
 
 
 
 
 
 
 
j
u
s
t
 
l
e
a
r
n
e
d
 
w
h
a
t
 
t
o
 
f
i
x
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
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
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
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
7
 
}
 
}
 
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
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
E
X
P
E
R
I
M
E
N
T
S
.
m
a
p
(
(
e
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
e
.
k
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
{
 
h
i
d
d
e
n
:
 
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
 
8
 
}
,
 
v
i
s
i
b
l
e
:
 
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
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
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
{
 
y
:
 
-
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
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
2
 
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
 
w
i
d
t
h
:
 
4
0
,
 
h
e
i
g
h
t
:
 
4
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
 
`
$
{
S
D
}
1
8
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
5
5
`
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
k
u
l
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
S
i
z
e
:
 
"
0
.
9
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
{
e
.
k
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
4
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
5
 
}
}
>
{
e
.
w
h
a
t
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
6
_
C
h
a
o
s
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
d
e
f
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
e
f
i
n
i
t
i
o
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
D
e
f
i
n
i
t
i
o
n
 
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
l
a
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
C
l
i
c
k
 
t
o
 
B
r
e
a
k
"
,
 
i
c
o
n
:
 
<
Z
a
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
C
h
a
o
s
P
l
a
y
g
r
o
u
n
d
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
e
x
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
R
e
a
l
 
E
x
p
e
r
i
m
e
n
t
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
E
x
p
e
r
i
m
e
n
t
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
y
 
d
o
e
s
 
N
e
t
f
l
i
x
 
r
u
n
 
C
h
a
o
s
 
M
o
n
k
e
y
 
d
u
r
i
n
g
 
B
U
S
I
N
E
S
S
 
H
O
U
R
S
,
 
n
o
t
 
n
i
g
h
t
s
 
a
n
d
 
w
e
e
k
e
n
d
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
B
e
c
a
u
s
e
 
u
s
e
r
s
 
a
r
e
 
a
w
a
k
e
.
"
,


 
 
 
 
 
 
 
 
"
S
o
 
t
h
e
 
e
n
g
i
n
e
e
r
s
 
r
e
s
p
o
n
s
i
b
l
e
 
c
a
n
 
i
n
v
e
s
t
i
g
a
t
e
 
a
n
d
 
f
i
x
 
i
s
s
u
e
s
 
i
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
,
 
i
n
s
t
e
a
d
 
o
f
 
b
e
i
n
g
 
p
a
g
e
d
 
a
t
 
3
 
A
M
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
f
a
s
t
e
r
 
d
u
r
i
n
g
 
t
h
e
 
d
a
y
.
"
,


 
 
 
 
 
 
 
 
"
L
o
g
s
 
a
r
e
 
c
h
e
a
p
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
T
h
e
 
p
o
i
n
t
 
i
s
 
t
o
 
f
i
n
d
 
w
e
a
k
n
e
s
s
e
s
 
w
h
i
l
e
 
t
h
e
 
t
e
a
m
 
i
s
 
a
r
o
u
n
d
,
 
n
o
t
 
w
h
e
n
 
t
h
e
y
'
r
e
 
a
s
l
e
e
p
.
 
A
 
f
a
i
l
u
r
e
 
c
a
u
g
h
t
 
a
t
 
2
 
P
M
 
w
i
t
h
 
e
n
g
i
n
e
e
r
s
 
i
n
 
t
h
e
 
r
o
o
m
 
b
e
c
o
m
e
s
 
a
 
f
i
x
;
 
t
h
e
 
s
a
m
e
 
f
a
i
l
u
r
e
 
a
t
 
3
 
A
M
 
i
s
 
a
 
p
a
g
e
d
 
o
u
t
a
g
e
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
F
i
r
s
t
 
c
h
a
o
s
 
e
x
p
e
r
i
m
e
n
t
 
i
n
 
a
 
s
y
s
t
e
m
.
 
B
e
s
t
 
t
a
r
g
e
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
K
i
l
l
 
t
h
e
 
e
n
t
i
r
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
 
d
a
t
a
b
a
s
e
.
"
,


 
 
 
 
 
 
 
 
"
K
i
l
l
 
o
n
e
 
p
o
d
 
o
f
 
a
 
r
e
d
u
n
d
a
n
t
 
s
t
a
t
e
l
e
s
s
 
s
e
r
v
i
c
e
 
i
n
 
s
t
a
g
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
D
r
o
p
 
a
l
l
 
i
n
t
e
r
n
e
t
.
"
,


 
 
 
 
 
 
 
 
"
F
o
r
m
a
t
 
d
i
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
t
a
r
t
 
s
m
a
l
l
,
 
i
n
 
a
 
c
o
n
t
r
o
l
l
e
d
 
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
,
 
w
i
t
h
 
r
e
d
u
n
d
a
n
c
y
 
i
n
 
p
l
a
c
e
.
 
I
n
c
r
e
a
s
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
 
g
r
a
d
u
a
l
l
y
 
a
s
 
c
o
n
f
i
d
e
n
c
e
 
g
r
o
w
s
.
 
D
a
y
-
1
 
'
k
i
l
l
 
t
h
e
 
D
B
'
 
i
s
 
a
 
p
o
s
t
m
o
r
t
e
m
,
 
n
o
t
 
c
h
a
o
s
 
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
'
s
 
t
h
e
 
d
i
f
f
e
r
e
n
c
e
 
b
e
t
w
e
e
n
 
c
h
a
o
s
 
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
 
a
n
d
 
l
o
a
d
 
t
e
s
t
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
N
o
n
e
.
"
,


 
 
 
 
 
 
 
 
"
L
o
a
d
 
t
e
s
t
i
n
g
 
c
h
e
c
k
s
 
b
e
h
a
v
i
o
r
 
u
n
d
e
r
 
h
e
a
v
y
 
t
r
a
f
f
i
c
;
 
c
h
a
o
s
 
c
h
e
c
k
s
 
b
e
h
a
v
i
o
r
 
w
h
e
n
 
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
 
f
a
i
l
.
 
B
o
t
h
 
a
r
e
 
n
e
e
d
e
d
 
f
o
r
 
r
e
l
i
a
b
i
l
i
t
y
.
"
,


 
 
 
 
 
 
 
 
"
C
h
a
o
s
 
i
s
 
f
a
s
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
L
o
a
d
 
t
e
s
t
i
n
g
 
f
i
n
d
s
 
b
u
g
s
;
 
c
h
a
o
s
 
d
o
e
s
n
'
t
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
L
o
a
d
 
t
e
s
t
i
n
g
 
a
n
s
w
e
r
s
 
'
c
a
n
 
w
e
 
h
a
n
d
l
e
 
X
 
r
e
q
/
s
?
'
 
C
h
a
o
s
 
a
n
s
w
e
r
s
 
'
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
 
t
h
i
s
 
t
h
i
n
g
 
b
r
e
a
k
s
?
'
 
T
o
g
e
t
h
e
r
 
t
h
e
y
 
c
o
v
e
r
 
t
h
e
 
t
w
o
 
f
a
i
l
u
r
e
 
m
o
d
e
s
 
o
f
 
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
Y
o
u
r
 
c
h
a
o
s
 
e
x
p
e
r
i
m
e
n
t
 
k
i
l
l
s
 
o
n
e
 
p
o
d
 
a
n
d
 
3
0
%
 
o
f
 
t
r
a
f
f
i
c
 
i
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
 
f
a
i
l
s
.
 
W
h
a
t
'
s
 
t
h
e
 
m
o
s
t
 
l
i
k
e
l
y
 
m
i
s
s
i
n
g
 
p
i
e
c
e
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
M
o
r
e
 
p
o
d
s
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
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
'
s
 
h
e
a
l
t
h
 
c
h
e
c
k
 
i
s
 
t
o
o
 
s
l
o
w
 
t
o
 
d
e
t
e
c
t
 
t
h
e
 
d
e
a
d
 
p
o
d
 
a
n
d
 
s
t
o
p
s
 
s
e
n
d
i
n
g
 
t
r
a
f
f
i
c
 
w
i
t
h
 
a
 
l
o
n
g
 
d
e
l
a
y
.
"
,


 
 
 
 
 
 
 
 
"
B
i
g
g
e
r
 
C
P
U
.
"
,


 
 
 
 
 
 
 
 
"
M
o
r
e
 
d
i
s
k
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
I
f
 
p
o
d
 
d
e
a
t
h
 
d
r
o
p
s
 
a
 
c
h
u
n
k
 
o
f
 
t
r
a
f
f
i
c
,
 
t
h
e
 
L
B
 
i
s
 
s
e
n
d
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
 
t
o
 
a
 
d
e
a
d
 
a
d
d
r
e
s
s
.
 
T
i
g
h
t
e
n
 
r
e
a
d
i
n
e
s
s
 
p
r
o
b
e
 
i
n
t
e
r
v
a
l
 
+
 
c
o
n
n
e
c
t
i
o
n
-
d
r
a
i
n
i
n
g
 
+
 
r
e
t
r
y
 
c
o
n
f
i
g
 
i
n
 
t
h
e
 
c
a
l
l
e
r
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
C
h
a
o
s
 
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
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
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
5
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
T
h
e
 
'
h
o
w
 
d
o
 
y
o
u
 
k
n
o
w
 
y
o
u
r
 
f
a
l
l
b
a
c
k
s
 
w
o
r
k
'
 
a
n
s
w
e
r
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




