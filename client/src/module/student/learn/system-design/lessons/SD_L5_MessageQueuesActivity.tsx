
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
R
e
f
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
 
B
o
x
e
s
,
 
G
l
o
b
e
,
 
P
a
u
s
e
,
 
P
l
a
y
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
n
d
 
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
A
 
b
u
f
f
e
r
 
b
e
t
w
e
e
n
 
f
a
s
t
 
p
r
o
d
u
c
e
r
s
 
a
n
d
 
s
l
o
w
 
c
o
n
s
u
m
e
r
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


 
 
 
 
 
 
 
 
A
 
m
e
s
s
a
g
e
 
q
u
e
u
e
 
s
t
o
r
e
s
 
m
e
s
s
a
g
e
s
 
f
r
o
m
 
p
r
o
d
u
c
e
r
s
 
u
n
t
i
l
 
c
o
n
s
u
m
e
r
s
 
p
r
o
c
e
s
s
 
t
h
e
m
.
 
I
t


 
 
 
 
 
 
 
 
d
e
c
o
u
p
l
e
s
 
t
i
m
i
n
g
:
 
p
r
o
d
u
c
e
r
s
 
c
a
n
 
f
i
r
e
 
a
n
d
 
f
o
r
g
e
t
,
 
c
o
n
s
u
m
e
r
s
 
p
u
l
l
 
a
t
 
t
h
e
i
r
 
o
w
n
 
p
a
c
e
,
 
a
n
d


 
 
 
 
 
 
 
 
t
h
e
 
q
u
e
u
e
 
a
b
s
o
r
b
s
 
b
u
r
s
t
s
.
 
T
h
r
e
e
 
g
u
a
r
a
n
t
e
e
s
 
c
o
m
e
 
f
o
r
 
f
r
e
e
:
 
<
b
>
d
u
r
a
b
i
l
i
t
y
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
(
m
e
s
s
a
g
e
s
 
s
u
r
v
i
v
e
 
c
r
a
s
h
e
s
)
,
 
<
b
>
o
r
d
e
r
<
/
b
>
 
(
w
i
t
h
i
n
 
a
 
p
a
r
t
i
t
i
o
n
)
,
 
a
n
d
 
<
b
>
b
a
c
k
p
r
e
s
s
u
r
e
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
(
s
l
o
w
 
c
o
n
s
u
m
e
r
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
 
c
r
a
s
h
 
p
r
o
d
u
c
e
r
s
)
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
8
 
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
P
r
o
d
u
c
e
r
"
,
 
v
:
 
"
S
e
n
d
s
 
m
e
s
s
a
g
e
s
.
 
D
o
e
s
n
'
t
 
w
a
i
t
 
f
o
r
 
t
h
e
 
c
o
n
s
u
m
e
r
.
 
D
o
e
s
n
'
t
 
e
v
e
n
 
k
n
o
w
 
w
h
o
 
t
h
e
 
c
o
n
s
u
m
e
r
 
i
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
r
o
k
e
r
"
,
 
v
:
 
"
S
t
o
r
e
s
 
m
e
s
s
a
g
e
s
 
d
u
r
a
b
l
y
 
(
o
f
t
e
n
 
d
i
s
k
 
+
 
r
e
p
l
i
c
a
t
i
o
n
)
.
 
T
r
a
c
k
s
 
w
h
o
'
s
 
r
e
a
d
 
w
h
a
t
.
 
H
a
n
d
l
e
s
 
d
e
l
i
v
e
r
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
o
n
s
u
m
e
r
"
,
 
v
:
 
"
P
u
l
l
s
 
m
e
s
s
a
g
e
s
,
 
p
r
o
c
e
s
s
e
s
 
t
h
e
m
,
 
a
c
k
s
.
 
I
f
 
i
t
 
c
r
a
s
h
e
s
 
m
i
d
-
p
r
o
c
e
s
s
,
 
t
h
e
 
b
r
o
k
e
r
 
r
e
-
d
e
l
i
v
e
r
s
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
,


 
 
 
 
 
 
 
 
 
 
 
 
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
R
a
b
b
i
t
M
Q
<
/
b
>
 
f
o
r
 
c
l
a
s
s
i
c
 
A
M
Q
P
 
q
u
e
u
e
s
.
 
<
b
>
S
Q
S
<
/
b
>
 
a
s
 
a
 
m
a
n
a
g
e
d
 
A
W
S
 
q
u
e
u
e
.
 
<
b
>
K
a
f
k
a
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
f
o
r
 
h
i
g
h
-
t
h
r
o
u
g
h
p
u
t
 
p
a
r
t
i
t
i
o
n
e
d
 
l
o
g
s
 
(
t
e
c
h
n
i
c
a
l
l
y
 
a
 
l
o
g
,
 
b
e
h
a
v
e
s
 
l
i
k
e
 
a
 
q
u
e
u
e
 
p
e
r


 
 
 
 
 
 
 
 
 
 
p
a
r
t
i
t
i
o
n
)
.
 
<
b
>
N
A
T
S
<
/
b
>
 
f
o
r
 
l
i
g
h
t
w
e
i
g
h
t
 
p
u
b
/
s
u
b
.
 
I
n
s
i
d
e
 
a
 
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
 
f
l
o
w
:


 
 
 
 
 
 
 
 
 
 
o
r
d
e
r
 
p
l
a
c
e
d
 
→
 
q
u
e
u
e
d
 
→
 
p
i
c
k
e
d
 
b
y
 
a
 
k
i
t
c
h
e
n
 
w
o
r
k
e
r
 
→
 
m
o
v
e
d
 
t
h
r
o
u
g
h
 
s
t
a
t
i
o
n
s
 
→
 
f
i
n
a
l
l
y


 
 
 
 
 
 
 
 
 
 
d
i
s
p
a
t
c
h
e
d
.
 
E
a
c
h
 
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
 
a
 
q
u
e
u
e
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
 
L
i
v
e
 
q
u
e
u
e
 
a
n
i
m
a
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




i
n
t
e
r
f
a
c
e
 
M
s
g
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
e
:
 
"
i
n
-
q
u
e
u
e
"
 
|
 
"
p
r
o
c
e
s
s
i
n
g
"
 
|
 
"
d
o
n
e
"
;


}




c
o
n
s
t
 
Q
U
E
U
E
_
C
A
P
A
C
I
T
Y
 
=
 
1
2
;




f
u
n
c
t
i
o
n
 
Q
u
e
u
e
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
p
r
o
d
u
c
e
r
R
a
t
e
,
 
s
e
t
P
r
o
d
u
c
e
r
R
a
t
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
2
)
;
 
/
/
 
m
s
g
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


 
 
c
o
n
s
t
 
[
c
o
n
s
u
m
e
r
R
a
t
e
,
 
s
e
t
C
o
n
s
u
m
e
r
R
a
t
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
.
5
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
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


 
 
c
o
n
s
t
 
[
q
u
e
u
e
,
 
s
e
t
Q
u
e
u
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
<
M
s
g
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
p
r
o
c
e
s
s
e
d
,
 
s
e
t
P
r
o
c
e
s
s
e
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
0
)
;


 
 
c
o
n
s
t
 
[
d
r
o
p
p
e
d
,
 
s
e
t
D
r
o
p
p
e
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
0
)
;


 
 
c
o
n
s
t
 
i
d
R
e
f
 
=
 
u
s
e
R
e
f
(
0
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
r
u
n
n
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
 
p
r
o
d
u
c
e
r
H
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
 
{


 
 
 
 
 
 
s
e
t
Q
u
e
u
e
(
(
q
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
q
.
l
e
n
g
t
h
 
>
=
 
Q
U
E
U
E
_
C
A
P
A
C
I
T
Y
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
D
r
o
p
p
e
d
(
(
d
)
 
=
>
 
d
 
+
 
1
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
q
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
+
+
i
d
R
e
f
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
 
[
.
.
.
q
,
 
{
 
i
d
,
 
s
t
a
t
e
:
 
"
i
n
-
q
u
e
u
e
"
 
}
]
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
1
0
0
0
 
/
 
p
r
o
d
u
c
e
r
R
a
t
e
)
;




 
 
 
 
c
o
n
s
t
 
c
o
n
s
u
m
e
r
H
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
 
{


 
 
 
 
 
 
s
e
t
Q
u
e
u
e
(
(
q
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
q
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
)
 
r
e
t
u
r
n
 
q
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
[
h
e
a
d
,
 
.
.
.
r
e
s
t
]
 
=
 
q
;


 
 
 
 
 
 
 
 
i
f
 
(
h
e
a
d
.
s
t
a
t
e
 
=
=
=
 
"
i
n
-
q
u
e
u
e
"
)
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
s
t
a
r
t
 
p
r
o
c
e
s
s
i
n
g


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
[
{
 
.
.
.
h
e
a
d
,
 
s
t
a
t
e
:
 
"
p
r
o
c
e
s
s
i
n
g
"
 
}
,
 
.
.
.
r
e
s
t
]
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
i
f
 
(
h
e
a
d
.
s
t
a
t
e
 
=
=
=
 
"
p
r
o
c
e
s
s
i
n
g
"
)
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
f
i
n
i
s
h
 
p
r
o
c
e
s
s
i
n
g


 
 
 
 
 
 
 
 
 
 
s
e
t
P
r
o
c
e
s
s
e
d
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
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
t
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
q
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
5
0
0
 
/
 
c
o
n
s
u
m
e
r
R
a
t
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
)
 
=
>
 
{


 
 
 
 
 
 
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
p
r
o
d
u
c
e
r
H
a
n
d
l
e
)
;


 
 
 
 
 
 
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
c
o
n
s
u
m
e
r
H
a
n
d
l
e
)
;


 
 
 
 
}
;


 
 
}
,
 
[
r
u
n
n
i
n
g
,
 
p
r
o
d
u
c
e
r
R
a
t
e
,
 
c
o
n
s
u
m
e
r
R
a
t
e
]
)
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
 
{


 
 
 
 
s
e
t
Q
u
e
u
e
(
[
]
)
;


 
 
 
 
s
e
t
P
r
o
c
e
s
s
e
d
(
0
)
;


 
 
 
 
s
e
t
D
r
o
p
p
e
d
(
0
)
;


 
 
 
 
i
d
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
}
;




 
 
c
o
n
s
t
 
f
i
l
l
P
c
t
 
=
 
(
q
u
e
u
e
.
l
e
n
g
t
h
 
/
 
Q
U
E
U
E
_
C
A
P
A
C
I
T
Y
)
 
*
 
1
0
0
;


 
 
c
o
n
s
t
 
i
s
F
u
l
l
 
=
 
q
u
e
u
e
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
 
Q
U
E
U
E
_
C
A
P
A
C
I
T
Y
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
p
e
e
d
 
u
p
 
t
h
e
 
p
r
o
d
u
c
e
r
.
 
W
a
t
c
h
 
t
h
e
 
q
u
e
u
e
 
f
i
l
l
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


 
 
 
 
 
 
 
 
D
r
a
g
 
t
h
e
 
r
a
t
e
s
.
 
W
h
e
n
 
p
r
o
d
u
c
e
r
 
&
g
t
;
 
c
o
n
s
u
m
e
r
,
 
t
h
e
 
q
u
e
u
e
 
g
r
o
w
s
.
 
A
t
 
c
a
p
a
c
i
t
y
,
 
n
e
w
 
m
e
s
s
a
g
e
s


 
 
 
 
 
 
 
 
a
r
e
 
d
r
o
p
p
e
d
 
(
o
r
 
t
r
i
g
g
e
r
 
b
a
c
k
p
r
e
s
s
u
r
e
 
t
o
 
t
h
e
 
p
r
o
d
u
c
e
r
 
i
n
 
r
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
)
.
 
W
h
e
n
 
c
o
n
s
u
m
e
r
 
≥


 
 
 
 
 
 
 
 
p
r
o
d
u
c
e
r
,
 
t
h
e
 
q
u
e
u
e
 
s
t
a
y
s
 
d
r
a
i
n
e
d
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
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
S
l
i
d
e
r
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
6
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
 
l
a
b
e
l
=
"
P
r
o
d
u
c
e
r
 
r
a
t
e
 
(
m
s
g
/
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
p
r
o
d
u
c
e
r
R
a
t
e
}
 
s
e
t
V
a
l
u
e
=
{
s
e
t
P
r
o
d
u
c
e
r
R
a
t
e
}
 
m
a
x
=
{
6
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
 
l
a
b
e
l
=
"
C
o
n
s
u
m
e
r
 
r
a
t
e
 
(
m
s
g
/
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
c
o
n
s
u
m
e
r
R
a
t
e
}
 
s
e
t
V
a
l
u
e
=
{
s
e
t
C
o
n
s
u
m
e
r
R
a
t
e
}
 
m
a
x
=
{
6
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
 
P
i
p
e
l
i
n
e
 
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
2
0
p
x
 
1
f
r
 
1
2
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
1
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
0
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
n
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
4
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
P
r
o
d
u
c
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
>
{
p
r
o
d
u
c
e
r
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
 
m
s
g
/
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
Q
u
e
u
e
:
 
v
i
s
u
a
l
 
c
e
l
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
 
`
r
e
p
e
a
t
(
$
{
Q
U
E
U
E
_
C
A
P
A
C
I
T
Y
}
,
 
1
f
r
)
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
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
 
8
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
i
s
F
u
l
l
 
?
 
W
A
R
N
 
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
5
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
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
 
Q
U
E
U
E
_
C
A
P
A
C
I
T
Y
 
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
 
m
s
g
 
=
 
q
u
e
u
e
[
i
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
i
l
l
e
d
 
=
 
!
!
m
s
g
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
P
r
o
c
e
s
s
i
n
g
 
=
 
m
s
g
?
.
s
t
a
t
e
 
=
=
=
 
"
p
r
o
c
e
s
s
i
n
g
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
 
i
s
P
r
o
c
e
s
s
i
n
g
 
?
 
`
$
{
W
A
R
N
}
3
3
`
 
:
 
i
s
F
i
l
l
e
d
 
?
 
`
$
{
S
D
}
3
3
`
 
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
0
8
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
i
s
P
r
o
c
e
s
s
i
n
g
 
?
 
W
A
R
N
 
:
 
i
s
F
i
l
l
e
d
 
?
 
S
D
 
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
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
3
2
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
 
i
s
P
r
o
c
e
s
s
i
n
g
 
?
 
W
A
R
N
 
:
 
i
s
F
i
l
l
e
d
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
F
i
l
l
e
d
 
?
 
`
#
$
{
m
s
g
.
i
d
}
`
 
:
 
"
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
T
o
p
:
 
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
q
u
e
u
e
 
d
e
p
t
h
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
 
i
s
F
u
l
l
 
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
q
u
e
u
e
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
 
/
 
{
Q
U
E
U
E
_
C
A
P
A
C
I
T
Y
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
>
{
f
i
l
l
P
c
t
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
 
f
u
l
l
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
1
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
W
A
R
N
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
W
A
R
N
}
1
0
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
o
x
e
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
 
W
A
R
N
 
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
4
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
C
o
n
s
u
m
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
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
{
c
o
n
s
u
m
e
r
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
 
m
s
g
/
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




 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
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
3
 
g
a
p
-
2
 
m
t
-
5
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
p
r
o
c
e
s
s
e
d
"
 
v
a
l
u
e
=
{
p
r
o
c
e
s
s
e
d
}
 
c
o
l
o
r
=
{
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
i
n
 
q
u
e
u
e
"
 
v
a
l
u
e
=
{
q
u
e
u
e
.
l
e
n
g
t
h
}
 
c
o
l
o
r
=
{
i
s
F
u
l
l
 
?
 
W
A
R
N
 
:
 
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
d
r
o
p
p
e
d
"
 
v
a
l
u
e
=
{
d
r
o
p
p
e
d
}
 
c
o
l
o
r
=
{
d
r
o
p
p
e
d
 
>
 
0
 
?
 
W
A
R
N
 
:
 
N
E
U
T
R
A
L
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
(
)
 
=
>
 
s
e
t
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
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
,
 
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
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
r
u
n
n
i
n
g
 
?
 
"
p
a
u
s
e
"
 
:
 
"
r
e
s
u
m
e
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
b
u
t
t
o
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
N
E
U
T
R
A
L
,
 
f
a
l
s
e
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
{
(
i
s
F
u
l
l
 
|
|
 
d
r
o
p
p
e
d
 
>
 
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
"
w
a
r
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
8
 
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
 
`
$
{
W
A
R
N
}
1
4
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
W
A
R
N
}
5
5
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
 
W
A
R
N
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
A
C
K
P
R
E
S
S
U
R
E


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
e
 
q
u
e
u
e
 
i
s
 
a
t
 
c
a
p
a
c
i
t
y
 
a
n
d
 
d
r
o
p
p
i
n
g
 
{
d
r
o
p
p
e
d
}
 
m
e
s
s
a
g
e
s
.
 
I
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
 
t
h
i
s
 
s
i
g
n
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
p
a
g
a
t
e
s
 
b
a
c
k
 
t
o
 
t
h
e
 
p
r
o
d
u
c
e
r
 
(
H
T
T
P
 
5
0
3
,
 
b
r
o
k
e
r
 
N
A
C
K
,
 
s
l
o
w
 
a
c
k
)
 
s
o
 
i
t
 
s
t
o
p
s
 
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
h
r
o
t
t
l
e
s
 
i
n
s
t
e
a
d
 
o
f
 
o
v
e
r
w
h
e
l
m
i
n
g
 
t
h
e
 
b
u
f
f
e
r
.


 
 
 
 
 
 
 
 
 
 
 
 
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
l
i
d
e
r
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
s
e
t
V
a
l
u
e
,
 
m
a
x
 
}
:
 
{
 
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
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
s
e
t
V
a
l
u
e
:
 
(
v
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
 
m
a
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
 
8
 
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
{
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
 
}
}
>
=
 
{
v
a
l
u
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
0
.
5
}


 
 
 
 
 
 
 
 
m
a
x
=
{
m
a
x
}


 
 
 
 
 
 
 
 
s
t
e
p
=
{
0
.
5
}


 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
v
a
l
u
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
 
s
e
t
V
a
l
u
e
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
,


 
 
 
 
 
 
 
 
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
t
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
c
o
l
o
r
 
}
:
 
{
 
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
 
v
a
l
u
e
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
 
b
o
r
d
e
r
C
o
l
o
r
:
 
c
o
l
o
r
 
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
c
o
l
o
r
}
1
0
`
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
v
a
l
u
e
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
 
4
 
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
4
 
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
4
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
v
a
l
u
e
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
,
 
d
i
s
a
b
l
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
 
d
i
s
a
b
l
e
d
 
?
 
"
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
"
 
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


 
 
 
 
o
p
a
c
i
t
y
:
 
d
i
s
a
b
l
e
d
 
?
 
0
.
5
 
:
 
1
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
 
W
h
e
n
 
a
n
d
 
w
h
e
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




c
o
n
s
t
 
U
S
E
_
C
A
S
E
S
 
=
 
[


 
 
{
 
w
h
o
:
 
"
O
r
d
e
r
 
c
h
e
c
k
o
u
t
 
(
F
l
i
p
k
a
r
t
)
"
,
 
w
h
y
:
 
"
P
l
a
c
e
 
o
r
d
e
r
 
→
 
q
u
e
u
e
 
→
 
f
u
l
f
i
l
l
m
e
n
t
 
w
o
r
k
e
r
s
 
p
i
c
k
 
u
p
.
 
S
p
i
k
e
-
f
r
i
e
n
d
l
y
,
 
r
e
t
r
i
e
s
 
f
r
e
e
.
"
,
 
e
x
:
 
"
S
Q
S
,
 
K
a
f
k
a
"
 
}
,


 
 
{
 
w
h
o
:
 
"
E
m
a
i
l
 
s
e
n
d
i
n
g
 
(
a
n
y
 
S
a
a
S
)
"
,
 
w
h
y
:
 
"
U
s
e
r
 
c
l
i
c
k
s
 
s
i
g
n
u
p
 
→
 
e
n
q
u
e
u
e
 
w
e
l
c
o
m
e
 
e
m
a
i
l
.
 
D
o
n
'
t
 
m
a
k
e
 
t
h
e
 
u
s
e
r
 
w
a
i
t
 
f
o
r
 
S
M
T
P
.
"
,
 
e
x
:
 
"
R
a
b
b
i
t
M
Q
,
 
S
E
S
"
 
}
,


 
 
{
 
w
h
o
:
 
"
V
i
d
e
o
 
t
r
a
n
s
c
o
d
i
n
g
 
(
Y
o
u
T
u
b
e
)
"
,
 
w
h
y
:
 
"
U
p
l
o
a
d
 
c
o
m
p
l
e
t
e
s
 
→
 
j
o
b
 
q
u
e
u
e
d
 
→
 
w
o
r
k
e
r
 
f
l
e
e
t
 
p
r
o
c
e
s
s
e
s
.
 
S
c
a
l
e
s
 
i
n
d
e
p
e
n
d
e
n
t
l
y
 
o
f
 
u
p
l
o
a
d
 
t
r
a
f
f
i
c
.
"
,
 
e
x
:
 
"
K
a
f
k
a
,
 
i
n
t
e
r
n
a
l
 
q
u
e
u
e
s
"
 
}
,


 
 
{
 
w
h
o
:
 
"
A
u
d
i
t
 
l
o
g
 
(
b
a
n
k
s
)
"
,
 
w
h
y
:
 
"
E
v
e
r
y
 
t
r
a
n
s
a
c
t
i
o
n
 
e
m
i
t
s
 
a
n
 
e
v
e
n
t
.
 
C
o
n
s
u
m
e
r
s
 
i
n
d
e
x
,
 
a
l
e
r
t
,
 
a
r
c
h
i
v
e
.
 
P
r
o
d
u
c
e
r
 
n
e
v
e
r
 
b
l
o
c
k
s
.
"
,
 
e
x
:
 
"
K
a
f
k
a
 
w
i
t
h
 
r
e
t
e
n
t
i
o
n
"
 
}
,


 
 
{
 
w
h
o
:
 
"
P
u
s
h
 
n
o
t
i
f
i
c
a
t
i
o
n
s
 
(
W
h
a
t
s
a
p
p
)
"
,
 
w
h
y
:
 
"
S
i
n
g
l
e
 
s
e
n
d
 
→
 
f
a
n
-
o
u
t
 
t
o
 
m
a
n
y
 
d
e
v
i
c
e
s
.
 
Q
u
e
u
e
 
s
m
o
o
t
h
s
 
t
h
e
 
b
u
r
s
t
.
"
,
 
e
x
:
 
"
F
C
M
,
 
c
u
s
t
o
m
 
b
r
o
k
e
r
s
"
 
}
,


 
 
{
 
w
h
o
:
 
"
M
o
b
i
l
e
 
s
y
n
c
 
q
u
e
u
e
s
"
,
 
w
h
y
:
 
"
P
h
o
n
e
 
o
f
f
l
i
n
e
 
→
 
b
u
f
f
e
r
 
l
o
c
a
l
l
y
 
→
 
d
r
a
i
n
 
t
o
 
s
e
r
v
e
r
 
w
h
e
n
 
r
e
c
o
n
n
e
c
t
e
d
.
"
,
 
e
x
:
 
"
O
n
-
d
e
v
i
c
e
 
S
Q
L
i
t
e
 
+
 
r
e
t
r
y
 
q
u
e
u
e
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
 
U
s
e
C
a
s
e
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
W
h
e
r
e
 
q
u
e
u
e
s
 
a
c
t
u
a
l
l
y
 
l
i
v
e
 
i
n
 
r
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
n
y
w
h
e
r
e
 
t
h
a
t
 
h
a
s
 
a
 
f
a
s
t
 
e
v
e
n
t
 
s
o
u
r
c
e
 
a
n
d
 
s
l
o
w
e
r
-
t
h
a
n
-
r
e
a
l
-
t
i
m
e
 
w
o
r
k
 
t
o
 
d
o
.
 
T
h
e
 
q
u
e
u
e
 
i
s


 
 
 
 
 
 
 
 
t
h
e
 
s
e
a
m
 
b
e
t
w
e
e
n
 
t
h
e
m
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
6
 
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
U
S
E
_
C
A
S
E
S
.
m
a
p
(
(
u
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
u
.
w
h
o
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
,


 
 
 
 
 
 
 
 
 
 
 
 
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
 
8
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
 
}
}
>
{
u
.
w
h
o
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
0
8
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
S
D
}
1
4
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
.
e
x
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
u
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
5
_
M
e
s
s
a
g
e
Q
u
e
u
e
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
d
e
m
o
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
i
v
e
 
Q
u
e
u
e
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
x
e
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
Q
u
e
u
e
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
r
e
a
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
R
e
a
l
 
U
s
e
 
C
a
s
e
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
U
s
e
C
a
s
e
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
P
r
o
d
u
c
e
r
 
r
a
t
e
 
i
s
 
1
0
0
0
 
m
s
g
/
s
.
 
C
o
n
s
u
m
e
r
 
r
a
t
e
 
i
s
 
2
0
0
 
m
s
g
/
s
.
 
T
h
e
 
q
u
e
u
e
 
c
a
n
 
h
o
l
d
 
6
0
s
 
o
f
 
b
u
f
f
e
r
e
d
 
w
o
r
k
.
 
A
f
t
e
r
 
h
o
w
 
m
a
n
y
 
s
e
c
o
n
d
s
 
d
o
e
s
 
t
h
e
 
s
y
s
t
e
m
 
s
t
a
r
t
 
d
r
o
p
p
i
n
g
 
(
o
r
 
a
p
p
l
y
i
n
g
 
b
a
c
k
p
r
e
s
s
u
r
e
)
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
"
,
 
"
A
b
o
u
t
 
7
5
s
 
—
 
b
u
f
f
e
r
 
f
i
l
l
s
 
a
t
 
8
0
0
 
m
s
g
/
s
 
n
e
t
"
,
 
"
3
0
s
"
,
 
"
1
0
 
m
i
n
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
N
e
t
 
i
n
f
l
o
w
 
=
 
8
0
0
 
m
s
g
/
s
.
 
C
a
p
a
c
i
t
y
 
=
 
6
0
s
 
×
 
1
0
0
0
 
=
 
6
0
,
0
0
0
 
m
s
g
.
 
T
i
m
e
 
t
o
 
f
i
l
l
 
=
 
6
0
,
0
0
0
 
/
 
8
0
0
 
=
 
7
5
s
.
 
A
f
t
e
r
 
t
h
a
t
,
 
t
h
e
 
b
r
o
k
e
r
 
e
i
t
h
e
r
 
d
r
o
p
s
,
 
r
e
t
u
r
n
s
 
5
0
3
,
 
o
r
 
s
i
g
n
a
l
s
 
t
h
e
 
p
r
o
d
u
c
e
r
 
t
o
 
s
l
o
w
 
d
o
w
n
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
 
c
l
e
a
n
e
s
t
 
w
a
y
 
f
o
r
 
a
 
q
u
e
u
e
 
t
o
 
h
a
n
d
l
e
 
a
 
p
e
r
m
a
n
e
n
t
 
s
l
o
w
d
o
w
n
 
o
f
 
t
h
e
 
c
o
n
s
u
m
e
r
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
o
p
 
m
e
s
s
a
g
e
s
 
s
i
l
e
n
t
l
y
.
"
,


 
 
 
 
 
 
 
 
"
A
p
p
l
y
 
b
a
c
k
p
r
e
s
s
u
r
e
 
t
o
 
t
h
e
 
p
r
o
d
u
c
e
r
 
(
H
T
T
P
 
5
0
3
,
 
s
l
o
w
 
a
c
k
)
 
s
o
 
i
t
 
s
l
o
w
s
 
d
o
w
n
 
o
r
 
s
h
e
d
s
 
l
o
a
d
.
"
,


 
 
 
 
 
 
 
 
"
C
r
a
s
h
 
t
h
e
 
b
r
o
k
e
r
.
"
,


 
 
 
 
 
 
 
 
"
S
e
n
d
 
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
 
t
o
 
a
 
s
i
n
g
l
e
 
c
o
n
s
u
m
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
B
a
c
k
p
r
e
s
s
u
r
e
 
i
s
 
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
h
a
t
 
t
h
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
 
c
a
n
'
t
 
k
e
e
p
 
u
p
.
 
P
r
o
d
u
c
e
r
s
 
e
i
t
h
e
r
 
r
e
t
r
y
 
w
i
t
h
 
b
a
c
k
o
f
f
,
 
q
u
e
u
e
 
l
o
c
a
l
l
y
,
 
o
r
 
s
h
e
d
 
l
o
a
d
.
 
S
i
l
e
n
t
 
d
r
o
p
s
 
c
a
u
s
e
 
d
a
t
a
 
l
o
s
s
 
a
n
d
 
l
o
s
t
 
t
r
u
s
t
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
y
 
d
o
e
s
 
a
n
 
e
m
a
i
l
-
s
e
n
d
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
 
u
s
e
 
a
 
q
u
e
u
e
 
b
e
t
w
e
e
n
 
'
u
s
e
r
 
c
l
i
c
k
s
 
s
i
g
n
u
p
'
 
a
n
d
 
'
S
M
T
P
 
s
e
n
d
'
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
M
T
P
 
r
e
q
u
i
r
e
s
 
q
u
e
u
e
s
 
b
y
 
s
p
e
c
.
"
,


 
 
 
 
 
 
 
 
"
S
M
T
P
 
i
s
 
s
l
o
w
 
a
n
d
 
u
n
r
e
l
i
a
b
l
e
;
 
d
o
i
n
g
 
i
t
 
i
n
l
i
n
e
 
b
l
o
c
k
s
 
t
h
e
 
s
i
g
n
u
p
 
r
e
s
p
o
n
s
e
.
 
T
h
e
 
q
u
e
u
e
 
l
e
t
s
 
t
h
e
 
A
P
I
 
r
e
t
u
r
n
 
i
n
s
t
a
n
t
l
y
 
a
n
d
 
r
e
t
r
y
 
o
n
 
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
Q
u
e
u
e
s
 
c
o
m
p
r
e
s
s
 
e
m
a
i
l
s
.
"
,


 
 
 
 
 
 
 
 
"
E
m
a
i
l
 
c
a
n
n
o
t
 
b
e
 
s
e
n
t
 
w
i
t
h
o
u
t
 
a
 
q
u
e
u
e
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
 
q
u
e
u
e
 
d
e
c
o
u
p
l
e
s
 
u
s
e
r
-
f
a
c
i
n
g
 
l
a
t
e
n
c
y
 
f
r
o
m
 
t
h
e
 
S
M
T
P
 
o
p
e
r
a
t
i
o
n
.
 
T
h
e
 
H
T
T
P
 
s
i
g
n
u
p
 
r
e
t
u
r
n
s
 
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
;
 
e
m
a
i
l
 
s
e
n
d
 
h
a
p
p
e
n
s
 
l
a
t
e
r
,
 
w
i
t
h
 
b
u
i
l
t
-
i
n
 
r
e
t
r
i
e
s
 
o
n
 
t
r
a
n
s
i
e
n
t
 
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
R
a
b
b
i
t
M
Q
 
g
u
a
r
a
n
t
e
e
s
 
o
r
d
e
r
 
W
I
T
H
I
N
 
w
h
i
c
h
 
b
o
u
n
d
a
r
y
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
T
h
e
 
w
h
o
l
e
 
c
l
u
s
t
e
r
"
,
 
"
A
 
s
i
n
g
l
e
 
q
u
e
u
e
 
(
o
r
 
p
a
r
t
i
t
i
o
n
)
"
,
 
"
A
c
r
o
s
s
 
a
l
l
 
c
o
n
s
u
m
e
r
s
"
,
 
"
A
c
r
o
s
s
 
a
l
l
 
p
r
o
d
u
c
e
r
s
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
T
o
t
a
l
 
c
l
u
s
t
e
r
-
w
i
d
e
 
o
r
d
e
r
i
n
g
 
i
s
 
n
o
t
 
p
r
o
v
i
d
e
d
.
 
W
i
t
h
i
n
 
a
 
s
i
n
g
l
e
 
q
u
e
u
e
 
(
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
 
c
o
n
s
u
m
e
r
 
r
e
a
d
i
n
g
 
s
e
q
u
e
n
t
i
a
l
l
y
)
,
 
m
e
s
s
a
g
e
s
 
a
r
e
 
o
r
d
e
r
e
d
.
 
K
a
f
k
a
 
s
i
m
i
l
a
r
l
y
 
o
r
d
e
r
s
 
w
i
t
h
i
n
 
a
 
p
a
r
t
i
t
i
o
n
,
 
n
o
t
 
a
c
r
o
s
s
 
p
a
r
t
i
t
i
o
n
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
M
e
s
s
a
g
e
 
Q
u
e
u
e
s
 
1
0
1
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
S
t
a
n
d
a
r
d
 
'
h
o
w
 
d
o
 
y
o
u
 
d
e
c
o
u
p
l
e
 
X
 
f
r
o
m
 
Y
'
 
a
n
s
w
e
r
 
i
n
 
a
n
y
 
H
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


